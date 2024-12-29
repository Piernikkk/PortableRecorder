import Input from "@/lib/components/Input";
import ListElement from "@/lib/components/List/ListElement";
import { useColors } from "@/lib/hooks/useColors";
import { IconSearch } from "@tabler/icons-react-native";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const testList = [
    {
        // name: 'take_1_28.12.2024_11:23',
        take: 1,
        date: new Date(),
        duration: 12
    },
    {
        name: 'take_1_28.12.2024_11:26',
        take: 2,
        date: new Date(),
        duration: 1
    },
    {
        name: 'take_1_28.12.2024_11:33',
        take: 3,
        date: new Date(),
        duration: 153
    },
]

export default function Library() {
    const colors = useColors();

    const [query, setQuery] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <Input
                    icon={IconSearch}
                    placeholder="Search..."
                    value={query}
                    onChangeText={setQuery}
                    // autoFocus
                    // ref={inputRef}
                    clearButtonMode="always"
                />
            </View>
            <FlatList
                data={testList}
                style={styles.flatlist}
                keyExtractor={(item) => item.date.toString() + item.take.toString()}
                renderItem={({ item, index }) => <ListElement take={item.take} date={item.date} duration={item.duration} borderTop={index == 0} name={item.name} />}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    test: {
        color: '#ffffff'
    },
    searchContainer: {
        padding: 10,
    },
    flatlist: {
        height: '100%',
    }
})