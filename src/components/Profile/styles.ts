import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    greetingContainer: {
        flexDirection: 'row'
    },
    greetingText: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 24,
        marginRight: 6
    },
    nameText: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 24,
    },
    phraseText: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        fontSize: 13,
    }
})