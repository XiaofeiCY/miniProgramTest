import apiList from './index.js';

const app = getApp();
const apiRequest = (url, method, data, header) => {
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data ? data : {},
      method: method,
      header: header ? header : { 'Content-Type': 'application/json' },
      success: function (res) {
        // 接口调用成功
        resolve(res); // 根据业务需要resolve接口返回的json的数据
      },
      fail: function (res) {
        // fail调用接口失败
        reject({ errormsg: '网络错误，请稍后重试', code: -1 });
      }
    });
  });
};

// 登录接口调用
let login = (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest(apiList.login, 'get', data));
  });
}

// 注册接口调用
let register = (data) => {
  return new Promise((resolve, reject) => {
    resolve(apiRequest(apiRequest(apiList.regist, 'get', data)));
  });
}

// 最后需要将具体调用的函数暴露出，给具体业务调用
// 具体业务中的调用参考pages/componentsTest/componentsTest.js

module.exports = {
  login: login,
  register: register
};