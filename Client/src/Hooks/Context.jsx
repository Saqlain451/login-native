import React, {useContext, useState} from "react";

const appContext = React.createContext(undefined, undefined);

const AppProvider = ({children}) => {
    // ---------------------- Register part ----------------------->
    const [registerInpData, setRegisterInpData] = useState({
        name: "",
        email: "",
        pass: "",
        cPass: "",
    })

    const [isAllData, setIsAllData] = useState(false);

    const registerChangeHandler = (name, value) => {
        setRegisterInpData({...registerInpData, [name]: value});
        if (registerInpData.name && registerInpData.email && registerInpData.pass && registerInpData.cPass) {
            setIsAllData(true);
        }
    }

    const submitHandler = () => {
        console.log(registerInpData);
    }


    return (
        <appContext.Provider
            value={{registerInpData, registerChangeHandler, submitHandler, isAllData}}
        >
            {children}
        </appContext.Provider>
    );
};

const useGlobalHook = () => useContext(appContext);

export {useGlobalHook, AppProvider};
