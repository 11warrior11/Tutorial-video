import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../consntants/ui";
import Header from "../layout/Header";
import TodoList from "@/layout/TodoList";

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

  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header totalTodos={todos.length} completedTodos={completedTodos.length}/>
      <TodoList todos={todos}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARI_BACKGROUND,
  },
});
