<script>
	let x = 7;
</script>

{#if x > 10}
	<p>{x} is greater than 10</p>
<!--👇 else-if blocks-->
{:else if 5 > x}
<!--👆 else-if blocks-->
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}
