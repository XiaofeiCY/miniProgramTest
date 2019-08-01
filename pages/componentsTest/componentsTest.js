const api = require('../../webapi/apiRequest.js');
const app = getApp()

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
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      "../../static/imgs/demo1.jpg",
      "../../static/imgs/demo2.jpg",
      "../../static/imgs/demo3.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 如果需求提到请求API之前必须先登录
    // 先判断当前的登录状态
    // 如果登录未过期，则正常继续后面的操作
    // 如果过期，则跳转到带有登录授权按钮的页面（通过wx.navigateTo跳转）
    wx.checkSession({
      success: res => {
        console.log('登录未过期', res);
        wx.showToast({
          title: '登录未过期啊',
        });
      },
      fail: res => {
        console.log('登录已经过期', res);
        wx.showToast({
          title: '登录已经过期',
        });
      }
    });
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
  },
  // 使用登录API
  userLogin() {
    const params = {
      userName: 'aaa',
      passWord: 'bbb'
    };
    api.login(params).then(res => {
      console.log(res); // API返回的数据
      // 业务处理
    });
  },
  // 测试操作请求之前判断是否需要验证登录
  testLogin(e) {
    if (app.globalData.userInfo) {
      wx.showModal({
        title: '成功啦',
        content: '现在是登录状态哦',
        showCancel: false, // 不要显示确定
        confirmText: 'OJBK', // 自定义确定文字
        confirmColor: '#ee9ca7', // 自定义确定文字颜色
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      });
    } else {
      app.globalData.userInfo = e.detail.userInfo
    }
  }
})