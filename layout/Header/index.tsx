import StyledText from "@/components/StyledText";
import { COLORS } from "@/consntants/ui";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
}

const Header: React.FC<HeaderProps> = ({totalTodos, completedTodos}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText variant="title">Todo app</StyledText>
        <StyledText variant="subtitle">December 13, 2025</StyledText>
      </View>
      <StyledText>Completed: {completedTodos} / {totalTodos}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
export default Header;
