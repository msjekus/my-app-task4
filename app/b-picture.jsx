import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import Spacer from "../components/Spacer"
import ThemeView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"

const BestPicture = () => {
    return (<ScrollView>
        <ThemeView style={styles.container}>

            <Image style={styles.img} source={require("../assets/image/madon.webp")} />
            <Spacer height={20}></Spacer>
            <ThemedText style={{ fontSize: 22, fontWeight: 'bold' }}>Сикстинська Мадо́нна (1512-1513)</ThemedText>

            <ThemedText style={{ alignItems: 'center', padding: 10, fontSize: 18 }}>Найзнаменитіша з безлічі створених художником образів Богоматері – “Сикстинська Мадонна”,
                один з найбільших шедеврів західного мистецтва. Цінність картини така велика, що світ відзначив 500-річчя її створення.
                <Spacer></Spacer>
                Рафаель написав це величезне полотно (265х196 см) для вівтаря церкви святого Сікста в П’яченці.
                На ньому зображена Богоматір, що спускається по хмарах і несе людям свого сина.
                Її образ урочистий і сумний, вона усвідомлює, яку жертву приносить. Як пише журналіст Ілля Бузукашвілі,
                у ній втілилися риси сотень жінок, які любили своїх немовлят.
                З двох боків від Мадонни зображені фігури святого Сикста і святої Варвари, внизу – два ангели.</ThemedText>

        </ThemeView>
    </ScrollView>
    )
}
export default BestPicture
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