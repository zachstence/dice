<script lang="ts">
	import { T } from '@threlte/core';
</script>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.PlaneGeometry args={[1000, 1000]} />
	<T.MeshStandardMaterial color="gray" />
</T.Mesh>
