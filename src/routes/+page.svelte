<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { Debug, World } from '@threlte/rapier';
	import Scene from '$lib/Scene.svelte';
</script>

<div class="h-screen w-screen">
	<Canvas>
		<World>
			<!-- <Debug /> -->
			<!-- <T.AxesHelper args={[100]} /> -->
			<Scene />
		</World>
	</Canvas>
</div>
