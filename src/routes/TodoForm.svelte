<script>
	import { Card, Button } from "flowbite-svelte";
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  function dispatchCancel() {
    dispatch('cancelEvent');
  }
</script>

<Card class="w-full !max-w-full !p-2">
    <input class="p-0 border-0 focus:ring-0 focus:border-b-[1px] focus:border-b-primary" type="text" placeholder="Enter Title..."/>

    <div class="relative mb-3 w-full bg-inherit mt-1" data-te-input-wrapper-init>
        <textarea
          class="!max-w-full !w-full peer block min-h-[auto] rounded border-0 bg-transparent py-[0.25rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:ring-primary"
          id="todo_description"
          rows="3"
          placeholder="Description"></textarea>
        <label
          for="todo_description"
          class="pointer-events-none absolute top-0 left-3 mb-0 !py-0 mt-1 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-focus:bg-inherit peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
          >Description</label
        >
      </div>

      <div class="flex w-full">
        <Button on:click={dispatchCancel} color="alternative" class="ml-auto" >Cancel</Button>
        <Button class="ml-2 bg-primary hover:bg-primarylight">Create</Button>
      </div>
</Card>

