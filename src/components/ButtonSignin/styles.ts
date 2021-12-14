import { cloneElement } from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
    },
    containerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: 56,
        borderRightWidth: 1,
        borderColor: theme.colors.line,
    },
    buttonTitle: {
        marginHorizontal: 46,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400
    }

})