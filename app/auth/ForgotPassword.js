import { View, Text } from "react-native";
import {Stack, useRouter} from "expo-router";

export default function ForgotPassword() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Stack.Screen options={{ title: "Your Feed" }} />

            <Text>Forgot Password Screen</Text>
        </View>
    );
}
