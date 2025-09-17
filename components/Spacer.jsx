import { View } from "react-native"

const Spacer = ({ height = 50, width = "100%", style, ...props }) => {
    return <View style={[{ height, width }, style]} {...props}></View>
}
export default Spacer