<script>
	import { T } from '@threlte/core';
	import { CameraControls } from '@threlte/extras';
	import D6 from './d6_v13/d6_v13.svelte';
</script>

<CameraControls />

<T.PerspectiveCamera makeDefault position={[10, 10, 10]} />

<T.DirectionalLight position={[5, 10, 15]} castShadow />

<T.AmbientLight />

<D6 />
