import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Header } from 'react-native-elements';

export default class OrderList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header outerContainerStyles={styles.headerOuter}
                        innerContainerStyles={styles.headerInner}
                        centerComponent={{ text: '扫码' }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerOuter: {},
    headerInner: {}
})