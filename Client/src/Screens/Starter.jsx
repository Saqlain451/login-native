import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import Login from "../../assets/Images/login.jpg";
import {GlobalStyel} from "../Styles/Global";
import {Colors} from "../Constants/Color";

const Starter = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: "center", gap: 10, backgroundColor: "white", paddingHorizontal: 30,}}>
            <Text style={{fontSize: 28, fontWeight: "bold", color: Colors.primary}}>
                ChatX
            </Text>
            <Text
                style={{fontSize: 25, fontWeight: "bold", color: Colors.secondery}}
            >
                Welcome to ChatX
            </Text>
            <Text style={{fontSize: 17, color: "#8f8888"}}>
                A simple login and register project with jwt authentication
            </Text>
            <Image
                source={Login}
                style={{
                    width: 300,
                    height: 200,
                    objectFit: "cover",
                    marginVertical: 50,
                }}
            />

            <View>
                <Pressable style={[GlobalStyel.btnRed, GlobalStyel.rowFlex]} onPress={() => {
                    navigation.navigate("Register")
                }}>
                    <Text style={GlobalStyel.textWhite}>Signup</Text>
                </Pressable>

                <Pressable onPress={() => {
                    navigation.navigate("Login")
                }}
                           style={[
                               GlobalStyel.btnRed,
                               GlobalStyel.rowFlex,
                               GlobalStyel.btnOutlineRed,
                               {
                                   marginTop: 20,
                               },
                           ]}
                >
                    <Text style={GlobalStyel.textRed}>Signin</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Starter;
