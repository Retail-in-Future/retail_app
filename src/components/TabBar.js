import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'

import Home from '../pages/Home'
import QRCode from '../pages/QRCode'
import OrderList from '../pages/orderList'
import LoginRequired from '../pages/Login/LoginRequired'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12
  },
  tabTitle: {
    fontSize: 10,
    lineHeight: 14,
    marginTop: 0,
    marginBottom: 4,
    color: '#778899',
    fontWeight: '600'
  },
  tabTitleSelected: {
    color: '#1EAAF1'
  }
})

const iconCreator = ({ name, isSelected }) => () => {
  const color = isSelected ? '#1EAAF1' : '#778899'
  return (
    <Icon containerStyle={styles.iconStyle}
      color={color}
      name={name}
      size={24}
    />
  )
}

export default class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedName: 'home'
    }
  }

  handlePressCreator(selectedName) {
    return () => {
      this.setState({ selectedName })
    }
  }

  render() {
    const { selectedName } = this.state
    return (
      <View style={styles.container}>
        <LoginRequired>
          <Tabs>
            <Tab title="首页"
              titleStyle={styles.tabTitle}
              selected={selectedName === 'home'}
              onPress={this.handlePressCreator('home')}
              selectedTitleStyle={styles.tabTitleSelected}
              renderIcon={iconCreator({ name: 'home', isSelected: false })}
              renderSelectedIcon={iconCreator({ name: 'home', isSelected: true })}
            >
              <Home />
            </Tab>
            <Tab title="扫码进入"
              titleStyle={styles.tabTitle}
              selected={selectedName === 'input'}
              onPress={this.handlePressCreator('input')}
              selectedTitleStyle={styles.tabTitleSelected}
              renderIcon={iconCreator({ name: 'input', isSelected: false })}
              renderSelectedIcon={iconCreator({ name: 'input', isSelected: true })}
            >
              <QRCode action="input" />
            </Tab>
            <Tab title="购买记录"
              titleStyle={styles.tabTitle}
              selected={selectedName === 'list'}
              onPress={this.handlePressCreator('list')}
              selectedTitleStyle={styles.tabTitleSelected}
              renderIcon={iconCreator({ name: 'list', isSelected: false })}
              renderSelectedIcon={iconCreator({ name: 'list', isSelected: true })}
            >
              <OrderList />
            </Tab>
            <Tab title="扫码支付"
              titleStyle={styles.tabTitle}
              selected={selectedName === 'payment'}
              onPress={this.handlePressCreator('payment')}
              selectedTitleStyle={styles.tabTitleSelected}
              renderIcon={iconCreator({ name: 'payment', isSelected: false })}
              renderSelectedIcon={iconCreator({ name: 'payment', isSelected: true })}
            >
              <QRCode action="payment" />
            </Tab>
          </Tabs>

        </LoginRequired>
      </View>
    )
  }
}
