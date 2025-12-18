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

  const addTodo = (title: Todo["title"]) => {
    setTodos([...todos, { id: todos.length + 1, title, isCompleted: false }]);
  };

  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header
        totalTodos={todos.length}
        completedTodos={completedTodos.length}
      />
      <TodoCreator onAddTodo={() => {addTodo}} />
      <TodoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARI_BACKGROUND,
  },
});
