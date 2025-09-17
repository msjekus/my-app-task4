import { StyleSheet, Image } from "react-native"
import Spacer from "../components/Spacer"
// import { Link } from "expo-router"
import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"

const Index = () => {
    return (<ThemedView style={styles.container}>
        <ThemedText style={{ fontSize: 28, fontWeight: 'bold' }}>Видатний художник: </ThemedText>
        <ThemedText style={{ fontSize: 28, fontWeight: 'bold' }}>Рафаєль Санті</ThemedText>
        <Spacer></Spacer>
        <Image source={{
            uri: "https://artlibraryblog.wordpress.com/wp-content/uploads/2023/03/243243-2.jpg?w=416"
        }}
            style={{ width: 400, height: 400, borderRadius: 100 }} />
        {/* <View style={styles.linkGroup}>
            <Link style={styles.link} href="/bio"><Text>Біографія</Text></Link>
            <Link style={styles.link} href="/pictures"><Text>Картини</Text></Link>
            <Link style={styles.link} href="/b-picture"><Text>Найкраща картина</Text></Link>
        </View> */}
    </ThemedView>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },
    // linkGroup: {
    //     justifyContent: "space-around",
    //     gap: 10,
    //     marginTop: 30,
    //     alignItems: "center",
    //     flexDirection: "row",
    // },
    // link: {
    //     marginTop: 20,
    //     fontSize: 20,
    //     color: '#000000ff',
    // },

})
export default Index

