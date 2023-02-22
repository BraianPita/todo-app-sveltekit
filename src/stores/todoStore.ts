import { writable } from 'svelte/store';
import db from "../lib/db-config";
export const todos = writable(Array());

export interface TodoItem {
    created_at: String,
    description: String,
    done: Boolean,
    due_date: String,
    uid: String
}

export const loadTodos = async () => {
    const {data, error} = await db.from('Todo').select();
    if(error) {
        return console.error(error);
    }
    
    todos.set(data);
}
loadTodos();

export const addTodo = async (todo: TodoItem) => {
    const {data, error} = await db.from('Todo').insert([todo]);
    
    if(error) {
        return console.error(error);
    }

    todos.update(cur => [...cur, data? data[0] : null]);
};

export const deleteTodo = async (id: String) => {
    const {error} = await db.from('Todo').delete().match({id});
    
    if(error) {
        return console.error(error);
    }

	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = async (id: String, currentState: Boolean) => {
    const {error} = await db.from('Todo').update({done: !currentState}).match({id})

    if(error) {
        return console.error(error);
    }

	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			todos[index].done = !todos[index].done;
		}
		return todos;
	});
};