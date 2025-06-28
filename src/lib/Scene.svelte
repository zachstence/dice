<script lang="ts">
	import { T } from '@threlte/core';
	import { CameraControls } from '@threlte/extras';
	import { D6 } from './D6';
	import Table from './Table.svelte';
	import type { Vector3Tuple } from 'three';

	const DIE_SIZE = 0.01; // 1cm for reference

	// Small offset from origin to avoid perfect symmetry
	export const getRandomPosition = (): Vector3Tuple => {
		const range = DIE_SIZE * 3; // ~3cm spread
		return [
			(Math.random() - 0.5) * range,
			DIE_SIZE * 20, // ~5cm above table
			(Math.random() - 0.5) * range
		];
	};

	// Random initial orientation
	export const getRandomRotation = (): Vector3Tuple => {
		return [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2];
	};

	// Forward-ish linear velocity with some randomness
	export const getRandomLinearVelocity = (): Vector3Tuple => {
		const baseSpeed = 0.2; // meters per second
		return [(Math.random() - 0.5) * baseSpeed, 0, (Math.random() - 0.5) * baseSpeed];
	};

	// Fast but variable spin
	export const getRandomAngularVelocity = (): Vector3Tuple => {
		const maxSpin = 20; // radians/sec
		return [
			(Math.random() - 0.5) * maxSpin,
			(Math.random() - 0.5) * maxSpin,
			(Math.random() - 0.5) * maxSpin
		];
	};
</script>

<T.PerspectiveCamera makeDefault position={[0.1, 0.3, 0.4]} />
<CameraControls />

<T.DirectionalLight position={[-0.5, 1.5, 2]} castShadow />
<T.AmbientLight />

<D6
	initialPosition={getRandomPosition()}
	initialRotation={getRandomRotation()}
	initialLinearVelocity={getRandomLinearVelocity()}
	initialAngularVelocity={getRandomAngularVelocity()}
	bodyColor="red"
	pipColor="white"
/>
<D6
	initialPosition={getRandomPosition()}
	initialRotation={getRandomRotation()}
	initialLinearVelocity={getRandomLinearVelocity()}
	initialAngularVelocity={getRandomAngularVelocity()}
	bodyColor="red"
	pipColor="white"
/>
<D6
	initialPosition={getRandomPosition()}
	initialRotation={getRandomRotation()}
	initialLinearVelocity={getRandomLinearVelocity()}
	initialAngularVelocity={getRandomAngularVelocity()}
	bodyColor="red"
	pipColor="white"
/>
<D6
	initialPosition={getRandomPosition()}
	initialRotation={getRandomRotation()}
	initialLinearVelocity={getRandomLinearVelocity()}
	initialAngularVelocity={getRandomAngularVelocity()}
	bodyColor="blue"
	pipColor="white"
/>
<D6
	initialPosition={getRandomPosition()}
	initialRotation={getRandomRotation()}
	initialLinearVelocity={getRandomLinearVelocity()}
	initialAngularVelocity={getRandomAngularVelocity()}
	bodyColor="blue"
	pipColor="white"
/>

<Table />
