<script>

	// <!-- component 👇 event -->
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	// <!-- component 👆 event -->
	
	function sayHello() {

		// <!-- component 👇 event -->
		// dispatch('message', {
		dispatch('myevent', {
			text: 'hello'
		})
		// <!-- component 👆 event -->

}
</script>

<button on:click={sayHello}>
	Click to say hello
</button>