import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.secondary100,

    },

    image: {
        marginBottom: -50,
        width: '100%',
    },

    content: {
        paddingHorizontal: 50,
    },

    title: {
        fontSize: 40,
        color: theme.colors.heading,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 40,

    },
    mensage: {
        margin: 16,
        fontSize: 15,
        color: theme.colors.highlight,
        textAlign: 'center',
        fontFamily: theme.fonts.text400,
        lineHeight: 26,

    },

})