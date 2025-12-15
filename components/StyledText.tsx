import { COLORS } from "@/consntants/ui";
import {Text, TextProps, StyleSheet} from "react-native"

type StyledTextProps = TextProps;

const StyledText: React.FC<StyledTextProps> = ({style, ...props}) => {
    return <Text style={[styles.base, style]} {...props} />
}

const styles = StyleSheet.create({
    base:{
        color: COLORS.PRIMARY_TEXT
    }
})

export default StyledText