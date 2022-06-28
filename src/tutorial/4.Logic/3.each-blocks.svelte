<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
	<!--👇 open each block -->
	<!-- {#each cats as cat} -->
	{#each [...cats] as { id, name }}
		<!-- {#each cats as { id, name }} -->
		<!--👆 open each block -->
		<li>
			<a target="_blank" href="https://www.youtube.com/watch?v={id}">
				{name}
			</a>
		</li>
		<!--👇 close each block -->
	{/each}
	<!--👆 close each block -->
</ul>
