import {StyleSheet} from "react-native";
import React from "react";
import {AppProvider} from "./src/Hooks/Context";
import StackNavigator from "./src/Navigator/StackNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";

const App = () => {
    return (
        <AppProvider>
            <SafeAreaProvider style={styles.container}>
                <StackNavigator/>
            </SafeAreaProvider>
        </AppProvider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
