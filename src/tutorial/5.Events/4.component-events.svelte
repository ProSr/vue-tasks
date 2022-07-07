<script>
	import Inner from './component-events/Inner.svelte';

	function handleMessage(event) {
		console.log(event);
		alert(event.detail.text);
	}
</script>

<!-- component 👇 event -->
	<!-- <Inner on:message={handleMessage}/> -->
	<Inner on:myevent={handleMessage}/>
<!-- component 👆 event -->