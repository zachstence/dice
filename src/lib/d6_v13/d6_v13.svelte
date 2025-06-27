<script>
	import { T } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	let { ref = $bindable() } = $props();

	const gltf = useGltf('/d6_v13.glb');

	const body = $derived($gltf?.nodes.Body);
	const pips = $derived(
		Object.entries($gltf?.nodes ?? {})
			.filter(([name]) => name.startsWith('Pip'))
			.map(([_, pip]) => pip)
	);
</script>

<T.Group bind:ref dispose={false}>
	{#if $gltf}
		<T.Group rotation={[Math.PI / 2, 0, 0]} scale={1}>
			<T.Mesh geometry={body.geometry} scale={10}>
				<T.MeshBasicMaterial color="red" />
			</T.Mesh>
			{#each pips as pip}
				<T.Mesh geometry={pip.geometry} scale={10}>
					<T.MeshBasicMaterial color="white" />
				</T.Mesh>
			{/each}
		</T.Group>
	{/if}
</T.Group>
