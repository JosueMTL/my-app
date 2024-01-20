import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
    const buttonStyle = theme === "primary" ?
        [styles.button, { backgroundColor: "#fff", borderWidth: 2, borderColor: "#ffd33d", borderRadius: 10 }] :
        styles.button;

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                    buttonStyle,
                    { opacity: pressed ? 0.7 : 1, transform: [{ scale: pressed ? 0.95 : 1 }] }
                ]}
                onPress={onPress}
            >
                {theme === "primary" && (
                    <FontAwesome
                        name="picture-o"
                        size={16}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                )}
                <Text style={[styles.buttonLabel, theme === "primary" && { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 280,
        height: 58,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#2196F3',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#000000',
        fontSize: 14,
    },
});
