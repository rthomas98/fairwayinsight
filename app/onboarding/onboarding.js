import { View, Text } from "react-native";
import { Link} from "expo-router";

export default function Onboarding() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <Text>Onboarding Screen</Text>
            <Link href="/home/feed">Go to</Link>
        </View>
    );
}
