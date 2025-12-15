import { COLORS } from "@/consntants/ui";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText from "./StyledText";

type StyledButtonProps = TouchableOpacityProps & {
  label: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  ...props
}) => {
  return (
    <TouchableOpacity style={styles.base} {...[props]}>
      {label && <StyledText>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default StyledButton;
