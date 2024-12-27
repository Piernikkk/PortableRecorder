import { StyleSheet, Text, View } from "react-native";

export default function Record() {
    return (
        <View>
            <Text style={styles.test}>Record</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    test: {
        color: '#ffffff'
    }
})