import { COLORS } from "@/consntants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type StyledTextInputProps = TextInputProps;

const StyledTextInput: React.FC<StyledTextInputProps> = ({ ...props }) => {
  return <TextInput style={[styles.input, props.style]} {...props} placeholderTextColor={"#323232"} />;
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    color: COLORS.PRIMARY_TEXT,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_BORDER,
    flex: 1,
  },
});

export default StyledTextInput;
