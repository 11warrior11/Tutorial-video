import StyledButton from "@/components/StyledButton";
import StyledModal from "@/components/StyledModal";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

type EditTodoModalProps = {
  isOped: boolean;
  onClose: () => void;
  onUpdate: (title: string) => void;
  title: Todo["title"];
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({
  isOped,
  onClose,
  onUpdate,
  title,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [inputError, setInputError] = useState(false);

  const onPressSave = () => {
    if (!updatedTitle) {
      setInputError(true);
      return;
    }
    onUpdate(updatedTitle);
    onClose();
  };

  return (
    <StyledModal isOped={isOped} onClose={onClose}>
      <View style={styles.modalContentContainer}>
        <StyledText variant="heading">Edit Todo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput
            value={updatedTitle}
            onChangeText={setUpdatedTitle}
            placeholder="Edit todo..."
          />
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton label="Candel" onPress={onClose} />
          <StyledButton label="Save" onPress={onPressSave} />
        </View>
      </View>
    </StyledModal>
  );
};

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  inputContainer: {
    minHeight: 60,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
});

export default EditTodoModal;
