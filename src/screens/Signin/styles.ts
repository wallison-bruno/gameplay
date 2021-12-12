import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background,

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
        color: theme.textHeading,
        textAlign: 'center'

    },
    mensage: {
        margin: 16,
        fontSize: 15,
        color: theme.textHeading,
        textAlign: 'center'
    },

})