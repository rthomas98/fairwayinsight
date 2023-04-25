import { Tabs } from 'expo-router';
import {createDrawerNavigator} from "@react-navigation/drawer";
import { FontAwesome5 } from '@expo/vector-icons';
import Feed from "./feed";
import Post from "../post/Post";

export default () => {
    return  (<Tabs >
        <Tabs.Screen
            name="feed"
            options={{
                tabBarIcon:  ({ color }) => (
                    <FontAwesome5
                        name="home"
                        size={24}
                        color="#FF1843"
                        component={Feed}
                    />
                ),
            }}
        />
    </Tabs>);


    const Drawer = createDrawerNavigator();

    function MyDrawer() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={Feed} />
                <Drawer.Screen name="Post" component={Post} />
            </Drawer.Navigator>
        );
    }
};
