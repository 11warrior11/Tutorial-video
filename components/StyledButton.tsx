import { COLORS } from "@/consntants/ui";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import StyledText from "./StyledText";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "large" | "small";
  variant?: "primary" | "delete";
};

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = "default",
  variant = "primary",
  disabled,
  ...props
}) => {
  const textVariant = (() => {
    if (size === "large") return "heading";
    return "small";
  })();
  return (
    <TouchableOpacity
      style={[
        styles.base,
        disabled ? styles.disabled : null,
        size === "small" ? styles.small : null,
        size === "large" ? styles.large : null,
        variant === "delete" ? styles.delete : null,
      ]}
      {...props}
      disabled={disabled}
    >
      {label && <StyledText variant={textVariant}>{label}</StyledText>}
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
  disabled: {
    opacity: 0.5,
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
  large: {
    paddingHorizontal: 30,
  },
});

export default StyledButton;
