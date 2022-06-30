<script>
	import Thing from './keyed-each-blocks/things.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];

	function handleClick() {
		things = things.slice(1);
	}
</script>

<button on:click={handleClick}>
	Remove first thing
</button>
	<!-- keyed each block 👇-->
<!-- {#each things as thing (thing.id)} -->
{#each things as thing (thing)}
	<!-- keyed each block  👆-->
	<Thing name={thing.name}/>
{/each}