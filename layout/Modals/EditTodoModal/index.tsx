import { Modal } from "react-native";

type EditTodoModalProps = {
  isOped: boolean;
  onClose: () => void;
  onUpdate: (title: string) => void;
};

const EditTodoModal: React.FC<EditTodoModalProps> = ({isOped, onClose, onUpdate}) => {
  return <Modal visible={isOped} onRequestClose={onClose} animationType="fade" transparent={true}>
  </Modal>;
};
// 1.22.51
