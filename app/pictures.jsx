import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import Spacer from "../components/Spacer"
import ThemeView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"

const Pictures = () => {
    return (<ScrollView >
        <ThemeView style={styles.container}>

            <ThemedText style={{ alignItems: 'center', fontSize: 26, fontWeight: 'bold' }}>Відомі картини Рафаеля Санті</ThemedText>
            <Spacer></Spacer>
            <Image style={styles.img} source={require("../assets/image/shcooll.webp")} />
            <Spacer height={10}></Spacer>
            <ThemedText style={{ fontSize: 22 }}>“Афінська школа” (1510-1511)</ThemedText>
            <Spacer></Spacer>
            <Image style={styles.img} source={require("../assets/image/baldasare.webp")} />
            <Spacer height={10}></Spacer>
            <ThemedText style={{ fontSize: 22 }}>“Портрет Бальдассаре Кастільоне” (1514-1515)</ThemedText>
            <Spacer></Spacer>
            <Image style={styles.img} source={require("../assets/image/Transformation.webp")} />
            <Spacer height={10}></Spacer>
            <ThemedText style={{ fontSize: 22 }}>“Преображення” (1516-1520)</ThemedText>
            <Spacer></Spacer>
            <Image style={styles.img} source={require("../assets/image/galatea.webp")} />
            <Spacer height={10}></Spacer>
            <ThemedText style={{ fontSize: 22 }}>“Тріумф Галатеї” (1511)</ThemedText>
            <Spacer></Spacer>
            <Image style={styles.img} source={require("../assets/image/three_graces.webp")} />
            <Spacer height={10}></Spacer>
            <ThemedText style={{ fontSize: 22 }}>“Три Грації” (1503-1504)</ThemedText>
            <Spacer></Spacer>
            <Image style={styles.img} source={require("../assets/image/donna_velata.webp")} />
            <Spacer height={10}></Spacer>
            <ThemedText style={{ fontSize: 22 }}>“Донна Велата” (1516)</ThemedText>
            <Spacer></Spacer>

        </ThemeView>
    </ScrollView>
    )
}
export default Pictures

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        marginTop: 20,
        fontSize: 18,

    },
    img: {
        width: 400,
        height: 600,
        borderRadius: 20,
    }
})