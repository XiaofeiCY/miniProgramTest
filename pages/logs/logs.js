//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    logs: [],
    marginTop: app.globalData.Custom.height
  },
  onLoad: function () {
    // console.log('日志打印');
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
