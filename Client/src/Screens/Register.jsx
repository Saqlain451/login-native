import React from 'react';
import {Pressable, Text, TextInput, View} from "react-native";
import {Colors} from "../Constants/Color";
import {GlobalStyel} from "../Styles/Global";
import {MaterialIcons} from '@expo/vector-icons';

const Register = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 30, justifyContent: "center", gap: 30,}}>
            <Text style={{fontSize: 28, fontWeight: "bold", color: Colors.secondery}}>SignUp</Text>
            <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                <MaterialIcons name="person" size={24} color={Colors.secondery}/>
                <TextInput placeholder={"Name"}/>
            </View>
            <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                <MaterialIcons name="email" size={22} color={Colors.secondery}/>
                <TextInput placeholder={"Email Address"} style={{color: "#8f8888"}}/>
            </View>
            <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                <MaterialIcons name="lock-open" size={24} color={Colors.secondery}/>
                <TextInput placeholder={"Password"} secureTextEntry/>
            </View>
            <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                <MaterialIcons name="lock" size={24} color={Colors.secondery}/>
                <TextInput placeholder={"Confirm Password"} secureTextEntry/>
            </View>
            <Pressable style={[GlobalStyel.btnRed, GlobalStyel.rowFlex, {borderRadius: 7}]}>
                <Text style={GlobalStyel.textWhite}>Signup</Text>
            </Pressable>
            <View style={GlobalStyel.rowFlex}>
                <Text style={{fontSize: 16, color: Colors.secondery}}>Already have an account?</Text>
                <Pressable onPress={() => {
                    navigation.navigate("Login")
                }}>
                    <Text style={{fontSize: 16, color: Colors.primary}}>Sign in</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Register;
