
// 动态设置当前页面的标题
Taro.setNavigationBarTitle({
    title: ''
})

Taro.showLoading()
// 显示消息提示框
Taro.showToast()
Taro.hideLoading()
// 导航栏显示加载动画
Taro.showNavigationBarLoading()

// 停止当前下拉刷新
Taro.stopPullDownRefresh();
Taro.hideNavigationBarLoading();
Taro.getCurrentInstance()