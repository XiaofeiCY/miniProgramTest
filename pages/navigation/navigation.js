//获取应用实例
const app = getApp()
Component({
  properties: {
    NavTitle: {
      type: String
    }
  },
  data: {
    CustomBarHeight: app.globalData.CustomBarHeight,
    defineSelfBTNWidth: app.globalData.Custom.width,
    defineSelfBTNHeight: app.globalData.Custom.height,
    defineSelfBTNTop: app.globalData.Custom.top,
    defineSelfBTNLeft: app.globalData.defineSelfBTNLeft,
    titleTop: app.globalData.titleTop
  }
})