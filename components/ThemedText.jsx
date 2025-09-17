import { Text, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";

const ThemedText = ({ style, title = false, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;
    return <Text style={[{ color: title ? theme.title : theme.text }, style]} {...props} />;
}
export default ThemedText;