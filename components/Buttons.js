import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Increment from './Increment';
import Decrement from './Decrement';

function Buttons() {
    const [count, IncrementCount] = useState(0);
    const [dcount, DecrementCount] = useState(0);
    const [IncbtnClicked, setIncBtn] = useState(false);
    const [decBtnClicked, setDecBtn] = useState(false);

    return (
        <View>
            <View style={styles.increment}>
                <Increment counter={count} />
            </View>
            <View style={styles.buttons}>
                <View style={styles.btnInrow}>
                    <TouchableOpacity
                        onPress={() => {
                            IncrementCount(count + 1);
                            setIncBtn(true);
                            setDecBtn(false);

                        }}
                        style={styles.roundButton1}>
                        <Text style={styles.iconColor}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            DecrementCount(dcount - 1);
                            setDecBtn(true);
                            setIncBtn(false)
                        }}
                        style={styles.roundButton2}>
                        <Text style={styles.iconColor}>-</Text>
                    </TouchableOpacity>

                </View>
                <Text style={styles.text}>Current value ={IncbtnClicked === true ? <Text>{count}</Text> : <Text>{dcount}</Text>}
                </Text>
            </View>
            <View style={styles.decrement}>
                <Decrement counter={dcount} />
            </View>
        </View>
    );
}

export default Buttons;

/// Just some styles
const styles = StyleSheet.create({
    roundButton1: {
        width: '30%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#3498DB',
        borderColor: 'red'
    },
    roundButton2: {
        width: '30%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#3498DB',
    },
    iconColor: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

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
        height: '40%',
        backgroundColor: 'white',

    },
    btnInrow: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-around',
        width: '100%',
        height: '70%'


    }
});
