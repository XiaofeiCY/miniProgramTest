Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpStr: 'aaa',
    richList: [{
      chainName: 'abaab'
    }, {
      chainName: 'aaabc'
    }, {
      chainName: 'cabbaaac'
    }],
    templateList: [{
      index: 1,
      model: '第一个数据'
    }, {
      index: 2,
      model: '第二个数据'
    }, {
      index: 3,
      model: '第三个数据'
    }],
    imgUrls: [
      "../../static/imgs/demo1.jpg",
      "../../static/imgs/demo2.jpg",
      "../../static/imgs/demo3.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  bindchange(event) {
    // 通过判断event.detail.source的不同，从而进行不同的操作（source：1、autoplay  2、touch）
    // console.log('~~~~', event);
  },
  loginSuccess(e) {
    console.log('&&^^&&&&&&&', e);
  },
  onMyEvent(e) {
    console.log('子组件触发打印', e);
  },
  getBtnInfo() {
    var data = wx.getMenuButtonBoundingClientRect();
    console.log('菜单按键宽度：', data.width);
    console.log('菜单按键高度：', data.height);
    console.log('菜单按键上边界坐标：', data.top);
    console.log('菜单按键右边界坐标：', data.right);
    console.log('菜单按键下边界坐标：', data.bottom);
    console.log('菜单按键左边界坐标：', data.left);
  }
})