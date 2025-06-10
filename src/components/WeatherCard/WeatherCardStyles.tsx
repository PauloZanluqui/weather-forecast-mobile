import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    card: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        elevation: 2,
    },
    cardContent: {
        gap: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    icon: {
        width: 50,
        height: 50,
    },
    favoriteIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
    },
});