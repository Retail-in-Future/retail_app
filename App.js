import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TabBar from './src/components/tabBar';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TabBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
