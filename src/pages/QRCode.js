import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, Text, Button } from 'react-native-elements';

import Header from '../components/commonHeader';

export default class QRCode extends Component {
    handleRefresh = () => {
        console.log('this is handle of refresh QR code.')
    };

    render() {
        return (
            <View style={styles.container}>
                <Header title='扫码' />
                <View style={styles.body}>
                    <Card imageStyle={styles.imageStyle}
                          image={require('../assets/images/pengchuan.png')}>
                        <Text style={styles.textStyle}>
                            请将手机屏幕对准扫描器
                        </Text>
                        <Button icon={{ name: 'refresh' }}
                                backgroundColor='#03A9F4'
                                onPress={this.handleRefresh}
                                buttonStyle={styles.buttonStyle}
                                title='刷新二维码' />
                    </Card>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
    },
    imageStyle: {
        width: '100%',
        height: 280
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 10
    },
    buttonStyle: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0
    }
});