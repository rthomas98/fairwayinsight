import { View, Text } from "react-native";
import {Stack, useRouter} from "expo-router";

export default function Feed() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <Text>Feed Screen</Text>
        </View>
    );
}
