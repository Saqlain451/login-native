import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Image, Pressable, Text, TextInput, View} from "react-native";
import LoginImg from '../../assets/Images/login.jpg'
import {Colors} from "../Constants/Color";
import {GlobalStyel} from "../Styles/Global";
import {MaterialIcons} from "@expo/vector-icons";
import axios from "axios";
import {useGlobalHook} from "../Hooks/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({navigation}) => {
    const {api} = useGlobalHook();
    const [logInData, setLoginData] = useState({
        email: "",
        pass: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const loginChangeHandler = (name, value) => {
        setLoginData({...logInData, [name]: value});
    }
    const loginHandler = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${api}/login`, logInData);

            if (response.data.token) {
                setIsLoading(false);
                await AsyncStorage.setItem('token', response.data.token);
                Alert.alert(response.data.msg);
                setLoginData({
                    email: "",
                    pass: ""
                })
                navigation.navigate("Home");
            }
        } catch (error) {
            console.log(error)
            if (error.response.data) {
                Alert.alert(error.response.data.err);
            } else {
                Alert.alert("Internal Server error");
            }


        } finally {
            setIsLoading(false);
        }
    }

    const checkToken = async () => {
        const token = await AsyncStorage.getItem("token") || null;
        if (token) {
            navigation.navigate("Home");
        }
    }

    useEffect(() => {

        checkToken()
    }, [navigation]);

    return (
        <View style={{flex: 1, backgroundColor: "white", paddingHorizontal: 30, justifyContent: "center", gap: 10,}}>
            <Image
                source={LoginImg}
                style={{
                    width: 300,
                    height: 200,
                    objectFit: "cover",
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
                {/*-------------------------Email --------------------------*/}
                <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                    <MaterialIcons name="email" size={22} color={Colors.secondery}/>
                    <TextInput placeholder={"Email Address"} value={logInData.email} onChangeText={(val) => {
                        loginChangeHandler("email", val)
                    }}/>
                </View>

                {/* ---------------------- Password -----------------------------*/}
                <View style={[GlobalStyel.rowFlex, GlobalStyel.inputFeild]}>
                    <MaterialIcons name="lock" size={24} color={Colors.secondery}/>
                    <TextInput placeholder={"Password"} secureTextEntry value={logInData.pass} onChangeText={(val) => {
                        loginChangeHandler("pass", val);
                    }}/>
                </View>
                {/* ------------------------------- button for log in ----------------------*/}
                <Pressable style={[GlobalStyel.btnRed, GlobalStyel.rowFlex, {borderRadius: 7}]} onPress={loginHandler}>
                    {isLoading ? <ActivityIndicator size={"large"} color={"white"}/> :
                        <Text style={GlobalStyel.textWhite}>Signin</Text>}

                </Pressable>
            </View>
            {/*-------------------------- sin up text ----------------------------------*/}
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
