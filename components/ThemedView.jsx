import { View, useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";

const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = COLORS[colorScheme] ?? COLORS.light;
    return <View style={[{ backgroundColor: theme.background },
        style]} {...props} />;

}
export default ThemedView; 