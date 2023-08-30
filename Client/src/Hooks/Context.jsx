import React, {useContext, useState} from "react";
import axios from "axios";
import {Alert} from "react-native";

const appContext = React.createContext(undefined, undefined);

const AppProvider = ({children}) => {

    const api = "https://login-native.onrender.com"
    // >---------------------- Register part ----------------------->
    const [registerInpData, setRegisterInpData] = useState({
        name: "",
        email: "",
        pass: "",
        cPass: "",
    })

    const [isAllData, setIsAllData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const registerChangeHandler = (name, value) => {
        setIsAllData(false);
        setRegisterInpData({...registerInpData, [name]: value});
        if (registerInpData.name && registerInpData.email && registerInpData.pass && registerInpData.cPass) {
            setIsAllData(true);
        }
    }

    const submitHandler = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${api}/register`, registerInpData)
            console.log(response.data.msg);
            if (response.data.msg) {
                setIsLoading(false);
                Alert.alert(response.data.msg);
                setRegisterInpData({
                    name: "",
                    email: "",
                    pass: "",
                    cPass: ""
                })
            }
        } catch (error) {
            if (error) {
                Alert.alert(error.response.data.err);
            }
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <appContext.Provider
            value={{registerInpData, registerChangeHandler, submitHandler, isAllData, isLoading}}
        >
            {children}
        </appContext.Provider>
    );
};

const useGlobalHook = () => useContext(appContext);

export {useGlobalHook, AppProvider};
