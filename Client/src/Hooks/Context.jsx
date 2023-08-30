import React, {useContext, useState} from "react";

const appContext = React.createContext(undefined, undefined);

const AppProvider = ({children}) => {

    const api = "http://localhost:4000"
    // >---------------------- Register part ----------------------->
    const [registerInpData, setRegisterInpData] = useState({
        name: "",
        email: "",
        pass: "",
        cPass: "",
    })

    const [isAllData, setIsAllData] = useState(false);

    const registerChangeHandler = (name, value) => {
        setIsAllData(false);
        setRegisterInpData({...registerInpData, [name]: value});
        if (registerInpData.name && registerInpData.email && registerInpData.pass && registerInpData.cPass) {
            setIsAllData(true);
        }
    }

    const submitHandler = async () => {
        try {
            const data = await fetch("http://localhost:4000/register", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...registerInpData}),
            })
            const res = data.json();
            console.log(res);
        } catch (error) {
            console.error(error)
        }
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
