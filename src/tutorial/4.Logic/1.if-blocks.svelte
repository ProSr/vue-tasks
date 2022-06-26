<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

<!--👇 if blocks-->
{#if user.loggedIn}
	<!--👆 if blocks-->
	<button on:click={toggle}> Log out </button>
	<!--👇 if blocks-->
{/if}
<!--👆 if blocks-->

<!--👇 if blocks-->
{#if !user.loggedIn}
	<!--👆 if blocks-->
	<button on:click={toggle}> Log in </button>
	<!--👇 if blocks-->
{/if}
<!--👆 if blocks-->
