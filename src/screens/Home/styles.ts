import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 24,
        width: '100%',
        marginTop: getStatusBarHeight() + 26,
        justifyContent: 'space-between',
    }
})