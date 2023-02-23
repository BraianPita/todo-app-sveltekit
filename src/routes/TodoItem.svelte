<script>
// @ts-nocheck

    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox} from 'flowbite-svelte';
    import { todos } from '../stores/todoStore';
</script>

<Table hoverable={true}>
  <TableHead>
    <TableHeadCell class="!p-4">
      <Checkbox />
    </TableHeadCell>
    <TableHeadCell>Description</TableHeadCell>
    <TableHeadCell>Due</TableHeadCell>
    <TableHeadCell>Status</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only"> Edit </span>
    </TableHeadCell>
  </TableHead>
  <TableBody class="divide-y" >
    
    {#each $todos as todo (todo.uid)}
    <TableBodyRow>
        <TableBodyCell class="!p-4">
          <Checkbox />
        </TableBodyCell>
        <TableBodyCell>{todo.description}</TableBodyCell>
        <TableBodyCell>{todo.due_date}</TableBodyCell>
        <TableBodyCell>{todo.done}</TableBodyCell>
        <TableBodyCell>
          <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
            Edit
          </a>
        </TableBodyCell>
    </TableBodyRow>
    {/each}
    
  </TableBody>
</Table>