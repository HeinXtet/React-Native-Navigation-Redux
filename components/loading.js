import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import {primaryColor} from '../utils/constant'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        color : primaryColor,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    }
})

class Loading extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={primaryColor} />
                <Text style={styles.loadingText}>Loading</Text>
            </View>
        )
    }
}

export default Loading;