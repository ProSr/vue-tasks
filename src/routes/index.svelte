<script>
	import db from './_old_components/_db.svelte';
	import TaskNumber from './_TaskNumber.svelte';
	import TaskRequest from './_TaskRequest.svelte';
	import TaskResponse from './_TaskResponse.svelte';
	import TaskResult from './_Table_tr.svelte';

  let tasks = db,
			task = 3;
</script>
<table><tr><td><TaskNumber task={task} tasks={tasks} /></td><td><TaskRequest /></td></tr><tr><td></td><td><TaskResponse /></td></tr><tr><TaskResult /></tr></table>