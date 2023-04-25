import { View, Text } from "react-native";
import {Stack, useRouter} from "expo-router";

export default function Login() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <Text>Login Screen</Text>
        </View>
    );
}
