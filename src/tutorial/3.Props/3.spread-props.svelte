<script>
	import Info from './spread-props/Nested.svelte';

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
</script>

<!-- spread👇 props-->
<Info {...pkg}/>
<!-- spread👆 props-->