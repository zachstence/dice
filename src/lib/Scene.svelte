<script lang="ts">
	import { T } from '@threlte/core';
	import { CameraControls } from '@threlte/extras';
	import { D6 } from './D6';
	import Table from './Table.svelte';
	import type { Vector3Tuple } from 'three';
	import type { D6Props } from './D6/D6.svelte';
	import { randomSignedInRange } from './randomSignedInRange';
	import { randomInRange } from './randomInRange';

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

	export const getRandomPosition = (): Vector3Tuple => {
		return [randomSignedInRange(0, 0.1), randomInRange(1.8, 2), randomSignedInRange(0, 0.1)];
	};

	export const getRandomRotation = (): Vector3Tuple => {
		const minRotation = Math.PI / 4;
		const maxRotation = (7 * Math.PI) / 4;
		return [
			randomInRange(minRotation, maxRotation),
			randomInRange(minRotation, maxRotation),
			randomInRange(minRotation, maxRotation)
		];
	};

	export const getRandomLinearVelocity = (): Vector3Tuple => {
		const minSpeed = 0.4;
		const maxSpeed = 0.8;
		return [randomSignedInRange(minSpeed, maxSpeed), 0, randomSignedInRange(minSpeed, maxSpeed)];
	};

	export const getRandomAngularVelocity = (): Vector3Tuple => {
		const minSpin = 10;
		const maxSpin = 15;
		return [
			randomSignedInRange(minSpin, maxSpin),
			randomSignedInRange(minSpin, maxSpin),
			randomSignedInRange(minSpin, maxSpin)
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

<T.DirectionalLight position={[0.1, 3, 0.1]} intensity={1} castShadow />
<T.DirectionalLight position={[0.8, 1, 0.6]} intensity={0.2} castShadow />
<T.AmbientLight intensity={0.7} />

{#if d6Props}
	<D6 {...d6Props} bodyColor="red" pipColor="white" />
{/if}

<Table />
