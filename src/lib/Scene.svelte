<script lang="ts">
	import { T } from '@threlte/core';
	import { CameraControls } from '@threlte/extras';
	import { D6 } from './D6';
	import Table from './Table.svelte';
	import { D6Model } from './D6/D6Model.svelte';

	export type SceneRef = {
		roll: () => void;
	};
	type Props = {
		ref?: SceneRef;
	};
	let { ref = $bindable() }: Props = $props();

	const attackingDice = Array.from({ length: 3 }).map(
		() =>
			new D6Model({
				bodyColor: 'red',
				pipColor: 'white'
			})
	);

	const defendingDice = Array.from({ length: 2 }).map(
		() =>
			new D6Model({
				bodyColor: 'blue',
				pipColor: 'white'
			})
	);

	ref = {
		roll: () => {
			attackingDice.forEach((d6) => d6.roll());
			defendingDice.forEach((d6) => d6.roll());
		}
	};
</script>

<T.PerspectiveCamera makeDefault position={[0.5, 1, 1.5]} near={0.001} />
<CameraControls />

<T.DirectionalLight position={[0.1, 3, 0.1]} intensity={1} castShadow />
<T.DirectionalLight position={[0.8, 1, 0.6]} intensity={0.2} castShadow />
<T.AmbientLight intensity={0.7} />

{#each attackingDice as model}
	<D6 {model} />
{/each}
{#each defendingDice as model}
	<D6 {model} />
{/each}

<Table />
