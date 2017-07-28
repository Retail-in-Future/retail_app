/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'

import QrCode from 'react-native-qrcode'

import axios from 'axios'

import Header from '../components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1
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
})

export default class QRCode extends Component {

  constructor() {
    super()
    this.state = {
      qrcode: ''
    }
  }

  componentDidMount() {
    if (!global.username) return

    this.handleRefresh()
  }

  handleRefresh() {
    const username = global.username
    axios.post('http://54.255.220.116:5000/token', { uid: username })
      .then((response) => {
        this.setState({
          qrcode: `${username}$${response.data.token}`
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="扫码" />
        <View style={styles.body}>
          <Card>
            <QrCode value={this.state.qrcode}
              size={200}
            />
            <Text style={styles.textStyle}>
                            请将手机屏幕对准扫描器
            </Text>
            <Button icon={{ name: 'refresh' }}
              backgroundColor="#03A9F4"
              onPress={this.handleRefresh}
              buttonStyle={styles.buttonStyle}
              title="刷新二维码"
            />
          </Card>
        </View>
      </View>
    )
  }
}
