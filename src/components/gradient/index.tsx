import React, { ReactNode } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { theme } from "../../global/theme"

interface Props {
    children: ReactNode
}

export function Gradient({ children }: Props) {

    const { secondary100, secondary80 } = theme.colors

    return (
        < LinearGradient
            style={styles.container}
            colors={[secondary100, secondary80]}
        >
            {children}
        </LinearGradient >
    )

}