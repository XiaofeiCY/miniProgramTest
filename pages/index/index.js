//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    testWxs: 1,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    latitude: '',
    longitude: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getLocation();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow() {
    console.log('这里是首页的onshow，我要测试拿到全局参数', app.globalData);
  },
  onHide() {
    console.log("首页这里打印onHide");
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getLocation(e) {
    console.log('这里打印事件内置参数值', e);
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        // this.latitude = res.latitude // 纬度
        // this.longitude = res.longitude // 经度
        console.log('!!@@', this.data.latitude, this.data.longitude);
      }
    })
  },
  onPullDownRefresh() {
    // wx.showNavigationBarLoading();
    wx.showToast({
      title: '成功下拉',
      icon: 'success',
      duration: 3000
    });
    setTimeout(function () {
      wx.stopPullDownRefresh()
    }, 3000)
  }
})
