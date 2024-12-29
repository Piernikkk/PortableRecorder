import RouteHeader from "@/lib/components/RouteHeader";
import { IconSettings } from "@tabler/icons-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
    return (
        <SafeAreaView>
            <RouteHeader name={'Settings'} icon={IconSettings} />
        </SafeAreaView>
    )
}