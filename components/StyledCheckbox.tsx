import { COLORS } from "@/consntants/ui";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type SttledCheckboxProps = {
  checked: boolean;
  onCheck: () => void;
};

const SttledCheckbox: React.FC<SttledCheckboxProps> = ({
  checked,
  onCheck,
}) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons
        name={checked ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={checked ? COLORS.success : COLORS.PRIMARY_BORDER }
      />
    </TouchableOpacity>
  );
};

export default SttledCheckbox;
