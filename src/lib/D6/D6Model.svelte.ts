import { randomInRange } from '$lib/randomInRange';
import { randomSignedInRange } from '$lib/randomSignedInRange';
import { RigidBody } from '@dimforge/rapier3d-compat';
import { Euler, Quaternion } from 'three';

export type D6ModelArgs = {
	bodyColor: string;
	pipColor: string;
};

export class D6Model {
	get bodyColor() {
		return this.args.bodyColor;
	}

	get pipColor() {
		return this.args.pipColor;
	}

	get isSleeping() {
		return this.#isSleeping;
	}

	#rigidBody?: RigidBody;

	#isSleeping: boolean | undefined = $state();

	constructor(private readonly args: D6ModelArgs) {}

	onRigidBodyCreate = (rigidBody: RigidBody): void => {
		this.#rigidBody = rigidBody;
		this.#isSleeping = rigidBody.isSleeping();
	};

	onRigidBodySleep = (): void => {
		this.#isSleeping = true;
	};

	onRigidBodyWake = (): void => {
		this.#isSleeping = false;
	};

	roll = (): void => {
		if (!this.#rigidBody) return;

		this.#rigidBody.setTranslation(
			{
				x: randomSignedInRange(0, 0.1),
				y: randomInRange(1.8, 2),
				z: randomSignedInRange(0, 0.1)
			},
			false
		);

		const minRotation = Math.PI / 4;
		const maxRotation = (7 * Math.PI) / 4;

		const rotation = new Quaternion().setFromEuler(
			new Euler().fromArray([
				randomInRange(minRotation, maxRotation),
				randomInRange(minRotation, maxRotation),
				randomInRange(minRotation, maxRotation)
			])
		);
		this.#rigidBody.setRotation(rotation, false);

		const minSpeed = 0.4;
		const maxSpeed = 0.8;
		this.#rigidBody.setLinvel(
			{
				x: randomSignedInRange(minSpeed, maxSpeed),
				y: 0,
				z: randomSignedInRange(minSpeed, maxSpeed)
			},
			false
		);

		const minSpin = 10;
		const maxSpin = 15;
		this.#rigidBody.setAngvel(
			{
				x: randomSignedInRange(minSpin, maxSpin),
				y: randomSignedInRange(minSpin, maxSpin),
				z: randomSignedInRange(minSpin, maxSpin)
			},
			true
		);
	};
}
