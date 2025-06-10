import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./HeaderStyles";

export function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Etec Weather</Text>
            <Image source={require("../../../assets/WeatherIcon.png")} style={styles.logo} />
        </View>
    );
}
