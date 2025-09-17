import { View, Text, StyleSheet, ScrollView } from "react-native"
import ThemedView from "../components/ThemedView"
import ThemedText from "../components/ThemedText"
const Bio = () => {
    return (<ScrollView>
        <ThemedView style={styles.container}>

            <ThemedText style={{ alignItems: 'center', fontSize: 28, fontWeight: 'bold' }}>Рафае́ль Са́нті (італ. Raffaello
                Santi, Raffaello Sanzio)</ThemedText>
            <ThemedText style={styles.text}>Народився Рафаель 28 березня 1483 в Урбіно, Італія. Перше навчання художній
                майстерності проводив його батько – Джованні Санті. Залишившись в 11 років сиротою, Рафаель став навчатися
                у П’єтро Перуджіно – відомого італійського художника.</ThemedText>
            <ThemedText style={styles.text}>Спочатку Рафаель копіює стиль свого вчителя, а пізніше виробляє свою неповторну манеру написання картин.
                Неповторну – бо його полотна чисті фарбами, легкі, фігури на них правильні в пропорціях.
                Однак анатомічні знання були отримані не відразу.
                Лише приїхавши у Флоренцію, ознайомившись з найбільшими роботами Мікеланджело Рафаель став вчитися
                пропорційного зображення людських тіл.</ThemedText>
            <ThemedText style={styles.text}>Творчий пік в біографії Рафаеля починається приблизно в 25 -річному віці. Він переїздить до Риму,
                де отримує кілька найцінніших замовлень. Так він виконує фрески в палацах і соборах.
                Там же Рафаель проявив себе як архітектор – був одним з керівних будівництвом собору Святого Петра.
                Картини Рафаеля найбільше прославлені завдяки його мадоннам. Він написав безліч полотен із зображенням Богоматері.
                6 квітня 1520 Рафаель помер у 37 році життя від гарячки, яку він схопив при розкопках; вона була смертельна
                для його виснаженого організму.</ThemedText>
        </ThemedView>
    </ScrollView>
    )
}
export default Bio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // gap: 20,
    },
    text: {
        marginTop: 20,
        fontSize: 18,

    }
})