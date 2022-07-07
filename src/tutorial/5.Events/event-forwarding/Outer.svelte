<!-- event forwarding 1 of 2 👇 --> <!--
	<script>
		import Inner from './Inner.svelte';
		import { createEventDispatcher } from 'svelte';

		const dispatch = createEventDispatcher();

		function forward(event) {
			dispatch('message', event.detail);
		}
	</script>

	<Inner on:message={forward}/>
 --> <!-- event forwarding 1 of 2 👆 -->

<script>
	import Inner from './Inner.svelte';
</script>

<!-- event 👇 forwarding 2 of 2 -->
<Inner on:message/>
<!-- event 👆 forwarding 2 of 2 -->