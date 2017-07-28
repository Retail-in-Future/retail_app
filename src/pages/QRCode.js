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
  textStyle: {
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
  }

  componentDidMount() {
    this.handleQRCodeRefresh()
  }

  handleQRCodeRefresh() {
    if (!global.username) return

    // TODO: [Linesh][7/28/17] introduce redux to handle state management
    const username = global.username
    // TODO: [Linesh][7/28/17] separate side-effect actions to redux/saga
    // TODO: [Linesh][7/28/17] develop a general axios middleware
    axios.post('http://54.255.220.116:5000/token', { uid: username })
      .then((response) => {
        this.setState({
          qrcode: `${username}$${response.data.token}`
        })
      })
  }

  render() {
    console.log('-------- this.state.qrcode --------')
    console.log(this.state.qrcode)

    return (
      <View style={styles.container}>
        <Header title="扫码" />
        <View style={styles.body}>
          <View>
            <QrCode value={this.state.qrcode}
              size={300}
            />
          </View>

          <Text style={styles.textStyle}>请将手机屏幕对准扫描器</Text>

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
