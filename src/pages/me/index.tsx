import React, { Component } from 'react'
import { View, OpenData, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss';
// import { observer, inject } from 'mobx-react'
// import CounterStore from '../../store/counter'

export default class app extends Component {


    render() {
        const list = [
            {
                title: '我的发票',
                path: '/pages/order/index',
                icon: 'wodefapiao1',
            },
            {
                title: '开票人',
                path: '/pages/drawer/index',
                icon: 'kaipiaoren1',
            },
        ]
        return (
            <View className="mePage">
                <View className="loginBox">
                    <OpenData type="userAvatarUrl" className="headimg"></OpenData>
                    <OpenData type="userNickName" className="username"></OpenData>
                </View>
                <View>
                    {list.map((item, index) => {
                        return (
                            <View key={index}>
                                111
                                <AtIcon value={item.icon}></AtIcon>
                                <Text>{item.title}</Text>
                                <AtIcon value="dajiantou"></AtIcon>
                            </View>
                        )
                    })}
                </View>
            </View >
        )
    }
}