<script lang='ts'>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Alert } from 'flowbite-svelte';

	import { loadTodos } from '../stores/todoStore';
	import TodoList from './TodoList.svelte';

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

	<button on:click={loadTodos}>Test</button>
	<TodoList />

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
