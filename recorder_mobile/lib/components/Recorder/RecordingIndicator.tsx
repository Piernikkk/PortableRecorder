import { useColors } from "@/lib/hooks/useColors";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";

export default function RecordingIndicator() {
    const colors = useColors();

    const styles = useMemo(() => StyleSheet.create({
        container: {
            height: 500,
            width: 15,
            backgroundColor: colors.recordButtonBack,
            borderRadius: 20,
            position: 'relative',
            // opacity: 0,
        },
        center: {
            backgroundColor: colors.background,
            borderRadius: 20,
            borderColor: colors.recordButtonBack,
            borderWidth: 2,
            position: 'absolute',
            top: 20,
            left: 0,
            bottom: 0,
            right: 0,
        }
    }), [colors.recordButtonBack, colors.background]);

    return (
        <View style={styles.container}>
            <View style={styles.center}>

            </View>
        </View>
    )
}
