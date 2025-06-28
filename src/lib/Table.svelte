<script lang="ts">
	import { T } from '@threlte/core';
	import { Collider, RigidBody } from '@threlte/rapier';
</script>

<RigidBody type="fixed">
	<Collider shape="cuboid" args={[0.5, 0.01, 0.5]} />
	<T.Mesh receiveShadow>
		<T.BoxGeometry args={[1, 0.02, 1]} />
		<T.MeshStandardMaterial color="gray" />
	</T.Mesh>
</RigidBody>
