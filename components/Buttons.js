import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Increment from './Increment';
import Decrement from './Decrement';

function Buttons() {
    const [count, IncrementCount] = useState(0);
    const [dcount, DecrementCount] = useState(0);

    return (
        <View>
            <View style={styles.increment}>
                <Increment name={count} />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => IncrementCount(count + 1)}
                    style={styles.roundButton1}>
                    <Text style={styles.btnColor}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => DecrementCount(dcount - 1)}
                    style={styles.roundButton2}>
                    <Text style={styles.btnColor}>-</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Current value =
          {count}</Text>
            </View>
            <View style={styles.decrement}>
                <Decrement name={dcount} />
            </View>
        </View>
    );
}

export default Buttons;

/// Just some styles
const styles = StyleSheet.create({
    roundButton1: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#3498DB',
    },
    roundButton2: {
        marginTop: 20,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#3498DB',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth:4

    },
    btnColor: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    increment: {
        backgroundColor: '#AED6F1',
        height: '30%'
    },
    decrement: {
        backgroundColor: '#A9DFBF',
        height: '30%'

    },
    buttons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }
});
