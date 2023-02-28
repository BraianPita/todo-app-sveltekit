<script>
    import {Check, Plus} from 'svelte-heros-v2';
    import { todos } from '../stores/todoStore';
    import TodoForm from './TodoForm.svelte';

    let showTodoForm = false;
</script>
    
<div class="flex flex-col my-1 w-full">
  {#each $todos as todo (todo.uid)}
  <div class="flex flex-column w-full border-b-[1px] border-b-gray-400">
    <div>
      <button class=" bg-red-300 border-2 border-red-700 bg-opacity-50 rounded-full mt-1"><Check class="w-[15px] h-[15px] text-red-700 opacity-0 hover:opacity-100"/></button>
    </div>
    <div class="pl-1">
      <p class="text-textcolor mt-[2px] mb-0">{todo.title}</p>
      <p class=" text-gray-500 text-xs mt-[-4px]">{todo.description}</p>
      <button>{todo.due_date}</button>
    </div>
  </div>
  {/each}
</div>

    <!-- Input new todo form -->
    {#if !showTodoForm}
    <button on:click={(e) => {showTodoForm = !showTodoForm}} class="m-1 ml-auto flex flex-row content-center items-center hover:text-primary group"><Plus class="transition-transform group-hover:rotate-90 ease-in duration-200 focus:outline-none" /> <span class="ml-2">New</span></button>
    {:else}
      <TodoForm on:cancelEvent={(e) => {showTodoForm = !showTodoForm}} />
    {/if}