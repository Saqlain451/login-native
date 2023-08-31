import React, {useEffect, useState} from 'react';
import {Alert, Image, Pressable, Text, View} from "react-native";
import axios from "axios";
import {useGlobalHook} from "../Hooks/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";
import {Colors} from "../Constants/Color";
import Login from "../../assets/Images/login.jpg";
import {GlobalStyel} from "../Styles/Global";

const Home = () => {
    const navigation = useNavigation()
    const {api} = useGlobalHook();
    const [userDetails, setUserDetails] = useState({name: ""});
    const getUserInfo = async () => {
        try {
            const token = await AsyncStorage.getItem("token") || null;
            // console.log(token)
            if (token) {
                const response = await axios.get(`${api}/home`, {
                    headers: {
                        Authorization: `JWT ${token}`
                    }
                });
                // console.info(response);
                if (response.data.user) {
                    setUserDetails({name: response.data.user.name})
                } else {
                    Alert.alert(response.data.err)
                    handleLogout;
                }
            } else {
                navigation.navigate("start");
            }
        } catch (error) {
            console.error(error)
            navigation.navigate("start");
        }
    }

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("token");
            navigation.navigate(`Login`);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <View style={{flex: 1, justifyContent: "center", gap: 10, backgroundColor: "white", paddingHorizontal: 30}}>
            <Text style={{fontSize: 20}}>
                {userDetails ? `Hello ${userDetails.name.split(" ")[0]}` : ""}
            </Text>

            <View style={{flexDirection: "row", gap: 8}}>
                <Text
                    style={{fontSize: 25, fontWeight: "bold", color: Colors.secondery}}
                >
                    Welcome to
                </Text>
                <Text style={{fontSize: 25, fontWeight: "bold", color: Colors.primary}}>
                    ChatX
                </Text>
            </View>
            <Text style={{fontSize: 16, color: "#8f8888"}}>
                A simple chat application, will implement chat feature later
            </Text>
            <Image
                source={Login}
                style={{
                    width: 300,
                    height: 250,
                    objectFit: "cover",
                    marginVertical: 50,
                }}
            />

            <Pressable style={[GlobalStyel.btnRed, GlobalStyel.rowFlex]}>
                <Text style={GlobalStyel.textWhite}>Let's Chat</Text>
            </Pressable>
        </View>
    );
};

export default Home;
