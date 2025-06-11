import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    favoriteCitiesTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
    },
    formSearch: {
        flexDirection: "row",
        margin: 10,
    },
    inputSearch: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginRight: 8,
        backgroundColor: "#fff",
    },
    buttonSearch: {
        backgroundColor: "#4f46e5",
        paddingHorizontal: 16,
        justifyContent: "center",
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
});
