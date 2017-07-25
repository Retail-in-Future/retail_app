import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'

import Header from '../components/Header';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <Text>I'm home page.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});