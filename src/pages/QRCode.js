/* eslint-disable class-methods-use-this */
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'

import QrCode from 'react-native-qrcode'

import axios from 'axios'

import Header from '../components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
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

    this.handleQRCodeRefresh = this.handleQRCodeRefresh.bind(this)
  }

  componentDidMount() {
    this.handleQRCodeRefresh()
  }

  handleQRCodeRefresh() {
    // TODO: [Linesh][7/28/17] introduce redux to handle state management
    // TODO: [Linesh][7/28/17] separate side-effect actions to redux/saga
    // TODO: [Linesh][7/28/17] develop a general axios middleware
    if (!global.username) return

    const username = global.username
    axios.post('http://54.255.220.116:5000/token', { uid: username })
      .then((response) => {
        this.setState({
          qrcode: `${username}$${response.data.token}`
        })
      })
      .catch(() => {})
  }

  render() {
    console.log(`QRCode: ${this.state.qrcode}`)

    return (
      <View style={styles.container}>
        <Header title="扫码" />
        <View style={styles.body}>
          {
            this.state.qrcode ?
              <View>
                <QrCode value={this.state.qrcode} size={300} />
                <Text style={styles.text}>请将手机屏幕对准扫描器</Text>
              </View>
              : <Text style={styles.text}>二维码生成失败。请刷新重试……</Text>
          }

          <Button icon={{ name: 'refresh' }}
            backgroundColor="#03A9F4"
            onPress={this.handleQRCodeRefresh}
            buttonStyle={styles.buttonStyle}
            title="刷新二维码"
          />
        </View>
      </View>
    )
  }
}
