import {StyleSheet} from "react-native"
import {Colors} from "../Constants/Color"

export const GlobalStyel = StyleSheet.create({
    rowFlex: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    imgFluid: {
        width: "100%",
        height: "90%",
    },
    btnRed: {
        backgroundColor: Colors.primary,
        height: 50,
        borderRadius: 50,
        justifyContent: "center"
    },
    btnOutlineRed: {
        borderWidth: 2,
        borderColor: Colors.primary,
        backgroundColor: Colors.white,

    },
    textWhite: {
        color: Colors.white,
        fontSize: 17,
    },
    textRed: {
        color: Colors.primary,
        fontSize: 17,
    },
    inputFeild: {
        paddingHorizontal: 10,
        height: 55,
        shadowColor: "rgba(0,0,0,0.3)",
        shadowOffset: {width: 3, height: 3},
        elevation: 6,
        shadowRadius: 6,
        backgroundColor: "white",
        borderRadius: 5
    }
})
