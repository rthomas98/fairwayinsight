import { View, Text } from "react-native";
import {Stack, useRouter} from "expo-router";

export default function GettingStarted() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Stack.Screen options={{ title: "Getting Started" }} />

            <Text>Getting Started Screen</Text>
        </View>
    );
}
