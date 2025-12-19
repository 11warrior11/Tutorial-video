import StyledButton from "@/components/StyledButton";
import SttledCheckbox from "@/components/StyledCheckbox";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/consntants/ui";
import { Todo } from "@/types/todo";
import { StyleSheet, View } from "react-native";

type ToDoItemProps = Todo & {
  onCheck: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
  onUpdateTitle: (id: Todo["id"], title: Todo["title"]) => void;
};

const TodoItem: React.FC<ToDoItemProps> = ({
  id,
  title,
  isCompleted,
  onCheck,
  onDelete, 
  onUpdateTitle
}) => {
  const onPressCheck = () => {
    onCheck(id);
  };
  const onPressDelete = () => {
    onDelete(id);
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.checkTitleContainer}>
        <SttledCheckbox checked={isCompleted} onCheck={onPressCheck} />
        <StyledText
          style={[
            { textDecorationLine: isCompleted ? "line-through" : "none" },
          ]}
        >
          {title}
        </StyledText>
      </View>
      <View style={styles.controlsContainer}>
        <StyledButton icon="pencil" size="small" />
        <StyledButton icon="trash" size="small" variant="delete" onPress={onPressDelete} />
      </View>
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
  controlsContainer: {
    flexDirection: "row",
    gap: 5,
  },
  checkTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default TodoItem;
