import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#444df4",
        width: "100%",
        height: 130,
        gap: 15,
    },
    headerText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
});