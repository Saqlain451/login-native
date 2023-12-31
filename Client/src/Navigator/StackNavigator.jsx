import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Starter from "../Screens/Starter";
import Home from "../Screens/Home";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name={"start"} component={Starter} options={{
                    headerShown : false,
                }}/>
                <Stack.Screen name={"Login"} component={Login} options={{
                    headerShown : false,
                }} />
                <Stack.Screen name={"Register"} component={Register} options={{
                    headerShadowVisible : false
                }}/>
                <Stack.Screen name={"Home"} component={Home} options={{
                        headerShadowVisible : false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator;
