import React from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    View,
    Image
} from "react-native";

import { style } from "./styles";
import discordIcon from "../../assets/discord.png"

interface Props extends TouchableOpacityProps {
    title: string,
}

export function ButtonSignin({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={style.container} activeOpacity={0.8}>
            <View style={style.containerIcon}>
                <Image source={discordIcon} />
            </View>
            <Text style={style.buttonTitle}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
