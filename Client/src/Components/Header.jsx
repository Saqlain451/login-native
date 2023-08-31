import React from 'react';
import {Pressable, Text} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import {Colors} from "../Constants/Color";

const Header = ({iconName, text}) => {
    return (
        <Pressable style={{width:30, height:30,flex:1,alignItems:"center",justifyContent:"center",borderRadius:5}}>
            <FontAwesome5 name={iconName} size={24} color="black"/>
            {
                text && <Text style={{fontSize:20, fontWeight:"bold", color:Colors.secondery}}>{text}</Text>
            }
        </Pressable>
    );
};

export default Header;
