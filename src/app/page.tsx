"use client";

import { useTodos } from "@/hooks/useTodos";
import TodoInput from "@/components/TodoInput";
import TodoItem from "@/components/TodoItem";
import TodoFilter from "@/components/TodoFilter";

export default function Home() {
  const { filteredTodos, filter, setFilter, addTodo, toggleTodo, deleteTodo, clearCompleted, activeCount } =
    useTodos();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-start justify-center pt-20 px-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todo</h1>
        <TodoInput onAdd={addTodo} />
        <TodoFilter
          filter={filter}
          onFilter={setFilter}
          activeCount={activeCount}
          onClearCompleted={clearCompleted}
        />
        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <p className="text-center text-gray-400 py-10">할 일이 없습니다.</p>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
