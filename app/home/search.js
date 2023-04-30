import { View, Text } from "react-native";
import {Stack, useRouter} from "expo-router";

export default function Search() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <Text>Search Screen</Text>
        </View>
    );
}
