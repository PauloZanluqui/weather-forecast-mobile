import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { format } from "date-fns";
import { Weather } from "../../models/WeatherModel";
import { api } from "../../lib/axios";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { styles } from "./WeatherCardStyles";

interface WeatherCardProps {
    weather: Weather;
    refreshCard: (cityName: string) => void;
}

export default function WeatherCard({ weather, refreshCard }: WeatherCardProps) {
    const [isFavorited, setIsFavorited] = useState(weather.isFavorite);

    async function toggleFavorite() {
        if (isFavorited) {
            await api.delete(`/favoritecity/${weather.favoriteCityId}`);
        } else {
            await api.post("/favoritecity", {
                name: weather.location.name,
            });
        }

        setIsFavorited(!isFavorited);
        refreshCard(weather.location.name);
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.favoriteIcon} onPress={toggleFavorite}>
                <FontAwesome6 name="star" size={24} color={isFavorited ? "gold" : "gray"} solid={isFavorited} />
            </TouchableOpacity>

            <View style={styles.cardContent}>
                <Text style={styles.title}>Clima em {weather.location.name}</Text>
                <Text>País: {weather.location.country}</Text>
                <Text>Temperatura: {Math.round(weather.current.temp_c)}°C</Text>
                <Text>Condição: {weather.current.condition.text}</Text>
                <Text>Última Atualização: {format(new Date(weather.current.last_updated), "dd-MM-yyyy HH:mm")}</Text>
            </View>

            <Image source={{ uri: `https:${weather.current.condition.icon}` }} style={styles.icon} />
        </View>
    );
}