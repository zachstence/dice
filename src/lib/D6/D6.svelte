<script lang="ts">
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { AutoColliders, Collider, RigidBody } from '@threlte/rapier';
	import type { Vector3Tuple } from 'three';
	import type { d6_v13_GLTF } from './d6_v13.types';

	export type D6Props = {
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
	}: D6Props = $props();

	const gltf = useGltf<d6_v13_GLTF>('/d6_v13.glb');

	const body = $derived($gltf?.nodes.Body);
	const pips = $derived(
		Object.entries($gltf?.nodes ?? {})
			.filter(([name]) => name.startsWith('Pip'))
			.map(([_, pip]) => pip)
	);

	const key = $derived(
		JSON.stringify({
			initialPosition,
			initialRotation,
			initialLinearVelocity,
			initialAngularVelocity
		})
	);
</script>

{#if $gltf}
	{#key key}
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
				<Collider shape="cuboid" args={[0.05, 0.05, 0.05]} restitution={0.2} friction={0.5} />
				<T.Group rotation.x={Math.PI / 2} position={[-0.05, -0.05, -0.05]} scale={0.01}>
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
	{/key}
{/if}
