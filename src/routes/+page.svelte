<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { Debug, World } from '@threlte/rapier';
	import Scene from '$lib/Scene.svelte';
</script>

<div class="h-screen w-screen">
	<Canvas>
		<World>
			<Debug />
			<Scene />
		</World>
	</Canvas>
</div>
