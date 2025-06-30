import { Vector3 } from 'three';

export const NORMALS = [
	{ value: 6, normal: new Vector3(0, 1, 0) },
	{ value: 1, normal: new Vector3(0, -1, 0) },
	{ value: 3, normal: new Vector3(0, 0, 1) },
	{ value: 4, normal: new Vector3(0, 0, -1) },
	{ value: 5, normal: new Vector3(1, 0, 0) },
	{ value: 2, normal: new Vector3(-1, 0, 0) }
] as const;
