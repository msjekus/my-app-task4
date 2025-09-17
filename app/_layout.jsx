import { Stack, Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { COLORS } from "../constants/colors"
import Ionicons from '@expo/vector-icons/Ionicons';

const RootLayout = () => {
    const colorScheme = useColorScheme();
    console.log(colorScheme);
    const theme = COLORS[colorScheme] ?? COLORS.light;
    // return <View style={{ flex: 1 }}>
    return <Tabs screenOptions={
        {
            headerShown: false,
            tabBarStyle: {
                backgroundColor: theme.navBackground
            },
            tabBarActiveTintColor: theme.iconColorFocused,
            tabBarInactiveTintColor: theme.iconColor,
        }

    }>
        <Tabs.Screen name="index" options={{
            title: "Головна",
            tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? "home" : "home-outline"}
                    size={24} />
            )
        }} />
        <Tabs.Screen name="bio" options={{
            title: "Біографія",
            tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? "book" : "book-outline"}
                    size={24} />
            )
        }} />
        <Tabs.Screen name="pictures" options={{
            title: "Картини",
            tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? "image" : "image-outline"}
                    size={24} />
            )
        }} />
        <Tabs.Screen name="b-picture" options={{
            title: "Найкраща картина",
            tabBarIcon: ({ focused }) => (
                <Ionicons name={focused ? "star" : "star-outline"}
                    size={24} />
            )
        }} />
    </Tabs>
    // </View>
}
export default RootLayout