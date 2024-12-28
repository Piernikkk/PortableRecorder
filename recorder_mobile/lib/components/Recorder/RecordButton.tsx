import { useColors } from "@/lib/hooks/useColors";
import { useMemo } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";

export default function RecordButton() {
    const colors = useColors();

    const styles = useMemo(() => StyleSheet.create({
        container: {
            height: 85,
            width: 85,
            backgroundColor: colors.recordButtonBack,
            borderRadius: 1000,
            position: 'relative',
            // opacity: 0,
        },
        center: {
            backgroundColor: colors.recordButtonCenter,
            borderRadius: 1000,
            borderColor: colors.background,
            borderWidth: 5,
            position: 'absolute',
            top: 6,
            left: 6,
            bottom: 6,
            right: 6,
        }
    }), [colors.recordButtonCenter, colors.recordButtonBack, colors.background]);

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.center}>

                </View>
            </View>
        </TouchableOpacity>
    )
}