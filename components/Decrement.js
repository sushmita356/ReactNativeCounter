import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Decrement(props) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapText}>
                <Text style={styles.text}>Decrement value</Text>
                <Text style={styles.text}> {props.counter}</Text>
            </View>
        </View>
    );
}

export default Decrement;
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

