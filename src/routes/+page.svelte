<script lang='ts'>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Alert, Card, Button } from 'flowbite-svelte';
	import db from '../lib/db-config';

	import { todos, loadTodos } from '../stores/todoStore';
	import type { TodoItem } from '../stores/todoStore';

	let todo_data: TodoItem[] = [];

	// async function getAllTodo() {
	// 	let { data: Todo, error } = await db
	// 	.from('Todo')
	// 	.select('*');

	// 	if (error) {console.log(error)}

	// 	if (Todo)
	// 	todo_data = Todo;

	// 	console.log(todo_data);
	// }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		This is edited!
	</h2>

	<div class="p-8">
		<Alert>
			<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
		</Alert>
	</div>

	<button on:click={loadTodos}>Test</button>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each $todos as todo (todo.uid)}
		<Card class="mb-4">
		<div class="flex items-center justify-between">
		<h4 class="text-lg font-semibold">{todo.description}</h4>
		<span class="text-sm text-gray-500">Due date:{todo.due_date}</span>
		</div>
		<div class="flex items-center justify-end">
		<Button variant="primary" size="sm" on:click={() => console.log(todo.uid)}>
		{#if todo.done}
		<i class="fas fa-check"></i> Done
		{:else}
		<i class="fas fa-times"></i> Not done
		{/if}
		</Button>
		</div>
		</Card>
		{/each}
	  </div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
