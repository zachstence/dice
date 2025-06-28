<script lang="ts">
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { AutoColliders, Collider, RigidBody } from '@threlte/rapier';
	import type { Vector3Tuple } from 'three';
	import type { d6_v13_GLTF } from './d6_v13.types';

	type Props = {
		bodyColor: string;
		pipColor: string;
		initialPosition?: Vector3Tuple;
		initialRotation?: Vector3Tuple;
		initialLinearVelocity?: Vector3Tuple;
		initialAngularVelocity?: Vector3Tuple;
	};
	let {
		bodyColor,
		pipColor,
		initialPosition,
		initialRotation,
		initialLinearVelocity,
		initialAngularVelocity
	}: Props = $props();

	const gltf = useGltf<d6_v13_GLTF>('/d6_v13.glb');

	const body = $derived($gltf?.nodes.Body);
	const pips = $derived(
		Object.entries($gltf?.nodes ?? {})
			.filter(([name]) => name.startsWith('Pip'))
			.map(([_, pip]) => pip)
	);
</script>

{#if $gltf}
	<T.Group
		position={initialPosition ?? [0, 0, 0]}
		rotation={initialRotation ?? [0, 0, 0]}
		dispose={false}
	>
		<RigidBody
			type="dynamic"
			ccd
			linearVelocity={initialLinearVelocity}
			angularVelocity={initialAngularVelocity}
		>
			<Collider shape="cuboid" args={[0.005, 0.005, 0.005]} restitution={0.4} friction={0.5} />
			<T.Group rotation.x={Math.PI / 2} position={[-0.005, -0.005, -0.005]} scale={0.001}>
				{#if body}
					<T.Mesh geometry={body.geometry}>
						<T.MeshStandardMaterial color={bodyColor} />
					</T.Mesh>
				{/if}
				{#each pips as pip}
					<T.Mesh geometry={pip.geometry}>
						<T.MeshStandardMaterial color={pipColor} />
					</T.Mesh>
				{/each}
			</T.Group>
		</RigidBody>
	</T.Group>
{/if}
