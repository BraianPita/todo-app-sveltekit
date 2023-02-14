<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Alert } from 'flowbite-svelte';
	import db from '../lib/db-config';

	// $: todo_data = [];

	async function getAllTodo() {
		let { data: Todo, error } = await db
		.from('Todo')
		.select('*');

		if (error) {console.log(error)}

		console.log(Todo);
	}
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

	<Counter />

	<div class="p-8">
		<Alert>
			<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
		</Alert>
	</div>

	<button on:click={getAllTodo}>Test</button>

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
