<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { Debug, World } from '@threlte/rapier';
	import Scene, { type SceneRef } from '$lib/Scene.svelte';

	import { Pane, Button } from 'svelte-tweakpane-ui';

	let sceneRef: SceneRef | undefined = $state();
</script>

{#if sceneRef}
	<Pane>
		<Button title="Roll" on:click={sceneRef.roll} />
	</Pane>
{/if}

<div class="h-screen w-screen">
	<Canvas>
		<World framerate={120}>
			<!-- <Debug /> -->
			<T.AxesHelper args={[100]} />
			<Scene bind:ref={sceneRef} />
		</World>
	</Canvas>
</div>
