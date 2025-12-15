import StyledText from "@/components/StyledText";
import { COLORS } from "@/consntants/ui";
import { StyleSheet, View } from "react-native";

type ToDoItemProps = {
  title: string;
  isCompleted: boolean;
};

const TodoItem: React.FC<ToDoItemProps> = ({ title, isCompleted }) => {
  return (
    <View style={[styles.container]}>
      <StyledText
        style={[{ textDecorationLine: isCompleted ? "line-through" : "none" }]}
      >
        {title}
      </StyledText>
      {/* <StyledButton label="Delete"/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
});

export default TodoItem;
