import { StyleSheet, View } from "react-native";
import ActionIcon from "../ActionIcon";
import { IconPlayerPlay } from "@tabler/icons-react-native";
import Title from "../Title";
import { useMemo } from "react";
import { useColors } from "@/lib/hooks/useColors";

export type ListElementProps = {
    name?: string;
    take: number;
    date: Date;
    duration?: number;
    borderTop?: boolean;
}

export default function ListElement({ name, duration, borderTop, take, date }: ListElementProps) {
    const colors = useColors();

    const styles = useMemo(() => StyleSheet.create({
        container: {
            borderColor: colors.border,
            borderBottomWidth: 1,
            // alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: 10,
        },
        borderTop: {
            borderTopWidth: 1,
        },
        description: {
            display: 'flex',
            flexDirection: 'column',
        }
    }), [colors.border]);

    return (
        <View style={[styles.container, borderTop && styles.borderTop]}>
            <View style={styles.description}>
                <Title size={16}>{name ? name : `Take ${take}`}</Title>
                <Title color={colors.text[2]} size={10}>{`${date.toDateString()} ${date.toTimeString().split(' ')[0]}`}</Title>
            </View>
            {duration && <Title color={colors.text[1]} size={12}>{`${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}`}</Title>}
        </View>
    )
}
