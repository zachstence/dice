<script lang="ts">
	import { T, type Props } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import type { Group } from 'three';

	let props: Props<typeof Group> = $props();

	const gltf = useGltf('/d6_v13.glb');

	const body = $derived($gltf?.nodes.Body);
	const pips = $derived(
		Object.entries($gltf?.nodes ?? {})
			.filter(([name]) => name.startsWith('Pip'))
			.map(([_, pip]) => pip)
	);
</script>

<T.Group {...props}>
	{#if $gltf}
		<T.Group dispose={false} rotation.x={Math.PI / 2} position={[-5, -5, -5]}>
			<T.Mesh geometry={body.geometry}>
				<T.MeshStandardMaterial color="red" />
			</T.Mesh>
			{#each pips as pip}
				<T.Mesh geometry={pip.geometry}>
					<T.MeshStandardMaterial color="white" />
				</T.Mesh>
			{/each}
		</T.Group>
	{/if}
</T.Group>
