import React, { Component } from 'react'
import { View, OpenData, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.scss';
// import { observer, inject } from 'mobx-react'
// import CounterStore from '../../store/counter'
import Taro from '@tarojs/taro';


export default class app extends Component {
    linkTo(url) {
        console.log('11111111111');
        Taro.navigateTo({
            url: url
        })
    }
    render() {
        const list = [
            {
                title: '我的发票',
                path: '/pages/order/index',
                icon: 'bookmark',
            },
            {
                title: '开票人',
                path: '/pages/drawer/index',
                icon: 'lock',
            },
        ]
        return (
            <View className="mePage">
                <View className="loginBox">
                    <OpenData type="userAvatarUrl" className="headimg"></OpenData>
                    <OpenData type="userNickName" className="username"></OpenData>
                </View>
                <View className='at-icon list'>
                    {list.map((item, index) => {
                        return (
                            <View className="li"
                                key={index}
                                onClick={() => { this.linkTo(item.path) }}>
                                <View className="left">
                                    <AtIcon className="left-icon" value={item.icon} ></AtIcon>
                                    <Text className="left-text">{item.title}</Text>
                                </View>
                                <AtIcon className="right" value="chevron-right"></AtIcon>
                            </View>
                        )
                    })}
                </View>
            </View >
        )
    }
}