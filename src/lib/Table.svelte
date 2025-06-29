<script lang="ts">
	import { T } from '@threlte/core';
	import { Collider, RigidBody } from '@threlte/rapier';
</script>

<RigidBody type="fixed" ccd>
	<Collider shape="cuboid" args={[2, 0.5, 2]} restitution={0} friction={0.5} />

	<T.Mesh receiveShadow>
		<T.BoxGeometry args={[4, 1, 4]} />
		<T.MeshStandardMaterial color="gray" />
	</T.Mesh>
</RigidBody>
