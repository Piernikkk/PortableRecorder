import { StyleSheet, Text, View } from "react-native";

export default function Library() {
    return (
        <View>
            <Text style={styles.test}>Library</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    test: {
        color: '#ffffff'
    }
})