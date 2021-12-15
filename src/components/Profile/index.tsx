import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
export function Profile() {
    return (
        <View>
            <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Olá,</Text>
                <Text style={styles.nameText}>Wallison</Text>
            </View>
            <Text style={styles.phraseText}>Hoje é um dia de vitória</Text>
        </View>
    )
}