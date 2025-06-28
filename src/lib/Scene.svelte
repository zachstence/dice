<script>
	import { T } from '@threlte/core';
	import { CameraControls } from '@threlte/extras';
	import D6 from './d6_v13/d6_v13.svelte';
	import Table from './Table.svelte';
</script>

<T.AxesHelper args={[100]} />

<T.PerspectiveCamera makeDefault position={[50, 150, 200]} />
<CameraControls />

<T.DirectionalLight position={[-50, 150, 200]} castShadow />
<T.AmbientLight />

<D6 position.y={5} />

<Table />
