<script lang="ts">
	import { T, type Props as ThrelteProps } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { AutoColliders, RigidBody } from '@threlte/rapier';
	import type { Group } from 'three';
	import type { d6_v13_GLTF } from './d6_v13.types';

	type Props = ThrelteProps<typeof Group> & {
		bodyColor: string;
		pipColor: string;
	};
	let { bodyColor, pipColor, ...props }: Props = $props();

	const gltf = useGltf<d6_v13_GLTF>('/d6_v13.glb');

	const body = $derived($gltf?.nodes.Body);
	const pips = $derived(
		Object.entries($gltf?.nodes ?? {})
			.filter(([name]) => name.startsWith('Pip'))
			.map(([_, pip]) => pip)
	);
</script>

{#if $gltf}
	<T.Group {...props}>
		<RigidBody type="dynamic">
			<AutoColliders shape="trimesh">
				<T.Group dispose={false} rotation.x={Math.PI / 2} position={[-5, -5, -5]}>
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
			</AutoColliders>
		</RigidBody>
	</T.Group>
{/if}
