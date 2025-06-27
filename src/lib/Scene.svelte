<script>
	import { T } from '@threlte/core';
	import { CameraControls, GLTF, useGltf } from '@threlte/extras';

	const d6 = useGltf('/d6.glb');

	$effect(() => {
		(async () => {
			const loaded = await $d6;
			console.log({ loaded });
		})();
	});
</script>

<CameraControls />

<T.PerspectiveCamera makeDefault position={[10, 10, 10]} />

<T.DirectionalLight position={[5, 10, 15]} castShadow />

<T.AmbientLight />

<GLTF url="/d6.glb" />
