import TodoCreator from "@/layout/TodoCreator";
import TodoList from "@/layout/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "../consntants/ui";
import Header from "../layout/Header";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Buy bread",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Buy eggs",
    isCompleted: false,
  },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const onAddTodo = (title: Todo["title"]) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), title, isCompleted: false },
    ]);
  };

  const onDeleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onCheckTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const onUpdateTodoTitle = (id: Todo["id"], title: Todo["title"]) => {
    setTodos(todos.map((todo) => (todo.id == id ? { ...todo, title } : todo)));
  };

  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodoTitle={onUpdateTodoTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARI_BACKGROUND,
  },
});
