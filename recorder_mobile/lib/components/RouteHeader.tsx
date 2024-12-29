import { Icon } from "@tabler/icons-react-native";
import { StyleSheet, View } from "react-native";
import { useColors } from "../hooks/useColors";
import Title from "./Title";

export type RouteHeaderProps = {
    name: string;
    icon?: Icon;
    description?: string;
    color?: string;
}

export default function RouteHeader({ name, icon: Icon, description, color }: RouteHeaderProps) {
    const colors = useColors();

    return (
        <View style={styles.container}>
            {Icon && <Icon color={color || colors.text[0]} size={30} />}
            <Title color={color} size={20}>{name}</Title>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
    }
})