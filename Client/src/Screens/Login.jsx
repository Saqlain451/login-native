import React from 'react';
import {Image, Pressable, Text, TextInput, View} from "react-native";
import LoginImg from '../assets/Images/login.jpg'
import {Colors} from "../Constants/Color";
import {GlobalStyel} from "../Styles/Global";
import {MaterialIcons} from "@expo/vector-icons";

const Login = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 30, justifyContent: "center", gap: 10,}}>
            <Image
                source={LoginImg}
                style={{
                    width: 300,
                    height: 200,
                    objectFit: "cover",
                    // marginVertical: 50,
                }}
            />

            <Text
                style={{fontSize: 25, fontWeight: "bold", color: Colors.secondery}}
            >
                Welcome to ChatX
            </Text>
            <Text style={{fontSize: 17, color: "#8f8888", marginBottom: 10}}>
                A simple login and register project with jwt authentication
            </Text>

            <View style={{gap: 25}}>
                <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                    <MaterialIcons name="email" size={22} color={Colors.secondery}/>
                    <TextInput placeholder={"Email Address"} style={{color: "#8f8888"}}/>
                </View>


                <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                    <MaterialIcons name="lock" size={24} color={Colors.secondery}/>
                    <TextInput placeholder={"Password"} secureTextEntry/>
                </View>

                <Pressable style={[GlobalStyel.btnRed, GlobalStyel.rowFlex, {borderRadius: 7}]}>
                    <Text style={GlobalStyel.textWhite}>Signin</Text>
                </Pressable>
            </View>

            <View style={[GlobalStyel.rowFlex, {marginTop: 5}]}>
                <Text style={{fontSize: 16, color: Colors.secondery}}>Don't have an account?</Text>
                <Pressable onPress={() => {
                    navigation.navigate("Register")
                }}>
                    <Text style={{fontSize: 16, color: Colors.primary}}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;
