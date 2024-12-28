import RecordButton from "@/lib/components/Recorder/RecordButton";
import RecordingIndicator from "@/lib/components/Recorder/RecordingIndicator";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Record() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text style={styles.test}>Record</Text> */}
            <RecordingIndicator />
            <RecordButton />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    test: {
        color: '#ffffff',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        gap: 40,
    }
})