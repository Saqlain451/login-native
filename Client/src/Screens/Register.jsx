import React from 'react';
import {Pressable, Text, TextInput, View} from "react-native";
import {Colors} from "../Constants/Color";
import {GlobalStyel} from "../Styles/Global";
import {MaterialIcons} from '@expo/vector-icons';
import {useGlobalHook} from "../Hooks/Context";

const Register = ({navigation}) => {

    const {registerInpData, registerChangeHandler, submitHandler, isAllData} = useGlobalHook();

    return (
        <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 30, justifyContent: "center", gap: 30,}}>
            <Text style={{fontSize: 28, fontWeight: "bold", color: Colors.secondery}}>SignUp</Text>
            <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                <MaterialIcons name="person" size={24} color={Colors.secondery}/>
                <TextInput placeholder={"Name"} name="name" value={registerInpData.name} onChangeText={(e) => {
                    registerChangeHandler("name", e)
                }}/>
            </View>
            <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                <MaterialIcons name="email" size={22} color={Colors.secondery}/>
                <TextInput placeholder={"Email Address"} name="email"
                           value={registerInpData.email}
                           onChangeText={(event) => registerChangeHandler("email", event)}/>
            </View>
            <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                <MaterialIcons name="lock-open" size={24} color={Colors.secondery}/>
                <TextInput placeholder={"Password"} secureTextEntry name={"pass"} value={registerInpData.pass}
                           onChangeText={(event) => registerChangeHandler("pass", event)}/>
            </View>
            <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                <MaterialIcons name="lock" size={24} color={Colors.secondery}/>
                <TextInput placeholder={"Confirm Password"} secureTextEntry name={"cPass"}
                           value={registerInpData.cPass}
                           onChangeText={(event) => registerChangeHandler("cPass", event)}/>
            </View>

            {/*-------------------------------------- button for sign up -------------------------------*/}
            <Pressable
                style={isAllData ? [GlobalStyel.btnRed, GlobalStyel.rowFlex, {borderRadius: 7}] : [GlobalStyel.btnRed, GlobalStyel.btnOutlineRed, GlobalStyel.rowFlex, {borderRadius: 7}]}
                onPress={submitHandler}
                disabled={!isAllData}>
                <Text style={isAllData? GlobalStyel.textWhite : GlobalStyel.textRed}>Signup</Text>
            </Pressable>

            {/*------------------------------------sign in section -------------------------------------*/}
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
