//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    logs: [],
    tabbar: {},
    marginTop: app.globalData.CustomBarHeight
  },
  onLoad: function () {
    app.editTabbar(); // tabbar加载的时候判断是否为当前页面
    
    // console.log('日志打印');
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
