<script>
	// @ts-nocheck
	import TasksComponent1 from '../_components/_TasksComponent1.svelte';
	import TasksComponent2 from '../_components/_TasksComponent2.svelte';


	
	/**
	 * @type {Array}
	 */
$: vues = {
		heading: [],
		table: []
	};

	function handleClick() {
		if (tasks.length == 1) tasks.length = 1;
		let task = tasks.pop();
		let score = scores.reduce((concat, value) => {
			let returnValue = concat;
			if (value == 'Номер') returnValue += '0';
			else {
				vues.heading = vues.heading.push(task.toUpperCase());
				vues.heading = vues.heading.push(value.toUpperCase());
				returnValue += +getConfirm(returnMessage);
			}

			return returnValue;
		}, '');
		vues.table.push({ score, task });
		vues.table = vues.table.sort((a, b) => b.score - a.score);
	}
	function getConfirm(message) {
		
		return 10101010;
	}
</script>

<h1>
	<TasksComponent2 vues={vues} />
</h1>

{#if tasks.length}
	<button on:click={handleClick}>Продолжить</button>
{:else}
	<button on:click={alert} disabled>Конец</button>
{/if}

<table>
	<tr>
		<td>Приоритет</td><td>Задача</td>
	</tr>
	{#each vues.table as vue (vue)}
		<tr>
			<TasksComponent1 task={vue.task} score={parseInt(vue.score, 2)} />
		</tr>
	{/each}
</table>
