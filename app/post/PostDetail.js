import { View, Text } from "react-native";
import {Stack, useRouter} from "expo-router";

export default function PostDetail() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Stack.Screen options={{ title: "Post Detail" }} />

            <Text>Post Detail Screen</Text>
        </View>
    );
}
