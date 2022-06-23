<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
	/* 1 of 3 reactive statement👉 */ $: /*👈 */ console.log('the count is ' + count);
	/* HERE SVELTE-KIT BUG STARTS */
	/* 2 of 3 reactive statement👉 */ $: /*👈 */ {
		console.log('the count is ' + count);
		alert('I SAID THE COUNT IS ' + count);
	}
	/* 3 of 3 reactive statement👉 */ $: /*👈 */ if (count >= 10) {
		alert('count is dangerously high!');
		count = 9;
	}
	/* HERE SVELTE-KIT BUG ENDS */
</script>
<!--1 of 1 👇 reactive assignment  -->
<button on:click={handleClick}>
<!--1 of 1 👆 reactive assignment  -->
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
