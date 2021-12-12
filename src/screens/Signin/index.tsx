import React from "react";
import { style } from "./styles";
import illustration from "../../assets/illustration.png"

import { View, Text, Image } from "react-native";
import { ButtonSignin } from "../../components/ButtonSignin";
export function Signin() {
    return (
        <View style={style.container}>
            <Image
                style={style.image}
                source={illustration}
            />
            <View>
                <Text style={style.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>
                <Text style={style.mensage}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>
                <ButtonSignin title="Entrar com Discord" />
            </View>
        </View>
    );
}