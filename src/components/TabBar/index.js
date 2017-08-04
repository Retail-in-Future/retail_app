import React, { Component } from 'react'
import { View } from 'react-native'
import { Tabs, Tab, Icon } from 'react-native-elements'

import Enter from '../../pages/Enter'
import OrderList from '../../pages/Orders'
import LoginRequired from '../../pages/Login/LoginRequired'

import styles from './styles'

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
      selectedTab: 'input'
    }
  }

  changeSelectedTab(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state

    return (
      <View style={styles.container}>
        <LoginRequired>
          <Tabs>
            <Tab title="扫码进入"
              titleStyle={styles.tabTitle}
              selected={selectedTab === 'input'}
              onPress={() => this.changeSelectedTab('input')}
              selectedTitleStyle={styles.tabTitleSelected}
              renderIcon={iconCreator({ name: 'input', isSelected: false })}
              renderSelectedIcon={iconCreator({ name: 'input', isSelected: true })}
            >
              <Enter action="input" />
            </Tab>
            <Tab title="购买记录"
              titleStyle={styles.tabTitle}
              selected={selectedTab === 'orders'}
              onPress={() => this.changeSelectedTab('orders')}
              selectedTitleStyle={styles.tabTitleSelected}
              renderIcon={iconCreator({ name: 'orders', isSelected: false })}
              renderSelectedIcon={iconCreator({ name: 'orders', isSelected: true })}
            >
              <OrderList />
            </Tab>
            <Tab title="扫码支付"
              titleStyle={styles.tabTitle}
              selected={selectedTab === 'payment'}
              onPress={() => this.changeSelectedTab('payment')}
              selectedTitleStyle={styles.tabTitleSelected}
              renderIcon={iconCreator({ name: 'payment', isSelected: false })}
              renderSelectedIcon={iconCreator({ name: 'payment', isSelected: true })}
            >
              <Enter action="payment" />
            </Tab>
          </Tabs>

        </LoginRequired>
      </View>
    )
  }
}
