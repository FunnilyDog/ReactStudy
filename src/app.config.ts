export default {
  pages: [
    'pages/index/index',
    'pages/invoice/index',
    'pages/me/index',
    // '/pages/drawer/index',
    '/pages/order/index',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    // backgroundColor: '#6190E8',
    color: '#7F7F7F',
    selectedColor: '#6190E8',
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: 'assets/icons/home.png',
        selectedIconPath: 'assets/icons/home-s.png',
        text: "首页"
      },
      {
        pagePath: "pages/invoice/index",
        iconPath: 'assets/icons/invoice.png',
        selectedIconPath: 'assets/icons/invoice-s.png',
        text: "开票"
      },
      {
        pagePath: "pages/me/index",
        iconPath: 'assets/icons/me.png',
        selectedIconPath: 'assets/icons/me-s.png',
        text: "我的"
      }
    ]
  },
  entryPagePath: "pages/me/index"
}
