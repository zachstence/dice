<script lang="ts">
	import { T } from '@threlte/core';
	import { CameraControls } from '@threlte/extras';
	import { D6 } from './D6';
	import Table from './Table.svelte';
	import type { Vector3Tuple } from 'three';
	import type { D6Props } from './D6/D6.svelte';

	export type SceneRef = {
		roll: () => void;
	};
	type Props = {
		ref?: SceneRef;
	};
	let { ref = $bindable() }: Props = $props();

	ref = {
		roll: () => {
			d6Props = undefined;
			d6Props = {
				initialPosition: getRandomPosition(),
				initialRotation: getRandomRotation(),
				initialLinearVelocity: getRandomLinearVelocity(),
				initialAngularVelocity: getRandomAngularVelocity()
			};
		}
	};

	const DIE_SIZE = 0.1; // 1cm for reference

	// Small offset from origin to avoid perfect symmetry
	export const getRandomPosition = (): Vector3Tuple => {
		const range = DIE_SIZE * 3;
		return [(Math.random() - 0.5) * range, DIE_SIZE * 20, (Math.random() - 0.5) * range];
	};

	// Random initial orientation
	export const getRandomRotation = (): Vector3Tuple => {
		return [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2];
	};

	// Forward-ish linear velocity with some randomness
	export const getRandomLinearVelocity = (): Vector3Tuple => {
		const baseSpeed = 0.5; // meters per second
		return [(Math.random() - 0.5) * baseSpeed, 0, (Math.random() - 0.5) * baseSpeed];
	};

	export const getRandomAngularVelocity = (): Vector3Tuple => {
		const maxSpin = 5; // radians/sec
		return [
			(Math.random() - 0.5) * maxSpin,
			(Math.random() - 0.5) * maxSpin,
			(Math.random() - 0.5) * maxSpin
		];
	};

	let d6Props:
		| Pick<
				D6Props,
				'initialPosition' | 'initialRotation' | 'initialLinearVelocity' | 'initialAngularVelocity'
		  >
		| undefined = $state();
</script>

<T.PerspectiveCamera makeDefault position={[0.5, 1, 1.5]} near={0.001} />
<CameraControls />

<T.DirectionalLight position={[-5, 15, 20]} castShadow />
<T.AmbientLight />

{#if d6Props}
	<D6 {...d6Props} bodyColor="red" pipColor="white" />
{/if}

<Table />
