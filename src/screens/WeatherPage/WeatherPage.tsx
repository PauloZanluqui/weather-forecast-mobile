import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./WeatherPageStyles";
import { Header } from "../../components/Header/Header";
import { api } from "../../lib/axios";
import { Weather } from "../../models/WeatherModel";
import { FavoriteCity } from "../../models/FavoriteCity";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

export function WeatherPage() {
    const [cityToSearch, setCityToSearch] = useState("");
    const [cityWeatherData, setCityWeatherData] = useState<Weather>();
    const [favoriteCitiesData, setFavoriteCitiesData] = useState<Weather[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getFavoriteCities();
    }, []);

    async function getFavoriteCities() {
        setFavoriteCitiesData([]);
        setIsLoading(true);
        const response = await api.get("/favoritecity");

        response.data.forEach(async (item: FavoriteCity) => {
            const responseWeather = await getWeatherByCity(item.name);

            if (responseWeather) {
                setFavoriteCitiesData((prevState) => [...prevState, responseWeather]);
            }
        });
        favoriteCitiesData.sort((a, b) => a.location.name.localeCompare(b.location.name));
        setIsLoading(false);
    }

    async function onSubmitSearch(e: any) {
        e.preventDefault();

        const responseWeather = await getWeatherByCity(cityToSearch);

        if (responseWeather) {
            setCityWeatherData(responseWeather);
        }

        setCityToSearch("");
    }

    async function getWeatherByCity(cityName: string) {
        const response = await api.get<Weather>(`/weather/${cityName}`);

        if (response.status === 200) {
            return response.data;
        } else {
            console.error(`Error fetching weather data: ${response.status}`);
        }
    }

    async function refreshCardSearch(cityName: string) {
        const response = await api.get<Weather>(`/weather/${cityName}`);

        if (response.status === 200) {
            setCityWeatherData(response.data);
        } else {
            console.error(`Error fetching weather data: ${response.status}`);
        }

        getFavoriteCities();
        setCityWeatherData(undefined);
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.formSearch}>
                <TextInput style={styles.inputSearch} placeholder="Digite o nome da cidade" value={cityToSearch} onChangeText={setCityToSearch} returnKeyType="search" onSubmitEditing={onSubmitSearch} />
                <TouchableOpacity style={styles.buttonSearch} onPress={onSubmitSearch}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
            </View>

            {cityWeatherData && <WeatherCard weather={cityWeatherData} refreshCard={refreshCardSearch} />}


            <Text style={styles.favoriteCitiesTitle}>Cidades Favoritas:</Text>
            {favoriteCitiesData.map((city) => (
                <WeatherCard key={city.location.lat} weather={city} refreshCard={getFavoriteCities} />
            ))}
        </View>
    );
}
