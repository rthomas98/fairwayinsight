import { View, Text } from "react-native";
import {Stack, useRouter} from "expo-router";

export default function Register() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Stack.Screen options={{ title: "Register" }} />

            <Text>Register Screen</Text>
        </View>
    );
}
