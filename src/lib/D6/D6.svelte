<script lang="ts">
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { Collider, RigidBody } from '@threlte/rapier';
	import type { d6_v13_GLTF } from './d6_v13.types';
	import { D6Model } from './D6Model.svelte';

	export type D6Props = {
		model: D6Model;
	};
	let { model }: D6Props = $props();

	const gltf = useGltf<d6_v13_GLTF>('/d6_v13.glb');

	const body = $derived($gltf?.nodes.Body);
	const pips = $derived(
		Object.entries($gltf?.nodes ?? {})
			.filter(([name]) => name.startsWith('Pip'))
			.map(([_, pip]) => pip)
	);
</script>

{#if $gltf}
	<T.Group dispose={false} castShadow>
		<RigidBody
			oncreate={model.onRigidBodyCreate}
			onsleep={model.onRigidBodySleep}
			onwake={model.onRigidBodyWake}
			type="dynamic"
			ccd
		>
			<Collider shape="cuboid" args={[0.05, 0.05, 0.05]} restitution={0.2} friction={0.5} />
			<T.Group rotation.x={Math.PI / 2} position={[-0.05, -0.05, -0.05]} scale={0.01}>
				{#if body}
					<T.Mesh geometry={body.geometry} castShadow>
						<T.MeshStandardMaterial
							color={model.bodyColor}
							roughness={0.4}
							metalness={0.0}
							clearcoat={0.1}
							clearcoatRoughness={0.3}
						/>
					</T.Mesh>
				{/if}
				{#each pips as pip}
					<T.Mesh geometry={pip.geometry} castShadow>
						<T.MeshStandardMaterial color={model.pipColor} roughness={0.6} metalness={0.0} />
					</T.Mesh>
				{/each}
			</T.Group>
		</RigidBody>
	</T.Group>
{/if}
