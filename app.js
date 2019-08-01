//app.js
App({
  onLaunch(options) {
    // console.log('这里是全局onLaunch', options);
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // console.log('展示本地存储能力', logs);

    // 登录
    wx.login({
      success: res => {
        // console.log('登录success', res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
      fail: res => {
        // console.log('登录fail', res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
      complete: res => {
        // console.log('登录函数执行结束complete', res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log('-------------', res);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 设置顶部导航栏的宽高
    let custom = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        console.log('~~~~~~~~~~~~~', res, custom);
        this.globalData.Custom = custom;//以备使用
        this.globalData.statusBarHeight = res.statusBarHeight;//状态栏(状态栏其实就是最顶部的显示时间信号那块)的高度，单位px
        this.globalData.titleTop = custom.top + (custom.height / 2);
        this.globalData.CustomBarHeight = custom.height + (custom.top - res.statusBarHeight) * 2 + res.statusBarHeight;
        this.globalData.defineSelfBTNLeft = res.safeArea.width - custom.right;
      }
    })
  },
  onShow(options) {
    // console.log('这里是全局onshow', options);
  },
  onHide() {
    // Do something when hide.
    // console.log('这里是全局onHide');
  },
  onError(msg) {
    // console.log('这里是全局onError', msg);
  },
  globalData: {
    userInfo: null,
    statusBarHeight: null,
    Custom: null,
    CustomBarHeight: null,
    defineSelfBTNLeft: null,
    titleHeight: null,
    otherInfo: 'aaa'
  }
})