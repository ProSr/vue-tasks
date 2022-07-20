<script>
	export let vues;
	console.log(vues);
	function handleClick(event) {
		vues.table = vues.table = { task: event.target.innerHTML, score: event.target.innerHTML }
	}
</script>

<div><button on:click={handleClick}>да</button><button on:click={handleClick}>нет</button></div>