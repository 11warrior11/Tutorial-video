import StyledButton from "@/components/StyledButton";
import StyledTextInput from "@/components/StyledTextInput";
import { Todo } from "@/types/todo";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

type TodoCreatorProps = {
  onAddTodo: (title: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      return;
    }
    onAddTodo(text);
    setText("");
  };
  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Add a task..."
        value={text}
        onChangeText={setText}
        isError={inputError}
      />
      <StyledButton label="+" onPress={onPressAdd} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default TodoCreator;
