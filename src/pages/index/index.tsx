import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import CounterStore from '../../store/counter'

import './index.scss'
interface CounterStoreProps {
  counterStore: CounterStore
}
@inject('counterStore')
@observer
class app extends Component {
  constructor(props) {
    super(props)
  }

  get inject() {
    // 兼容注入store 类型
    return this.props as CounterStoreProps
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    console.log('this.inject', this.inject.counterStore.incrementAsync());
    console.log('this.props===>', this.props);
    const { counterStore } = this.inject
    counterStore.increment()
  }
  render() {
    // const { counterStore } = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
      </View>
    )
  }
}

export default app
