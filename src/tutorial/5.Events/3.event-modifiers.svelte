<script>
	function handleClick() {
		alert('clicked')
	}
</script>
<!-- event modifiers 👇 -->
<!-- <button on:click|preventDefault|stopPropagation|passive|nonpassive|capture|once|self|trusted={handleClick}> -->
	<!-- event modifiers 👆 -->
	<!-- event modifiers 👇 -->
	<button on:click|once={handleClick}>
	<!-- event modifiers 👆 -->
	Click me
</button>