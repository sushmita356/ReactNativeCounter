import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Increment(props) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapText}>
                <Text style={styles.text}>Increment value</Text>
                <Text style={styles.text}>{props.counter}</Text>
            </View>
        </View>
    );
}

export default Increment;
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapText: {
        borderWidth: 4
    }
})

