// 设置API接口的ip地址和端口
// 数据只是做演示用，无实际意义
let host = 'http://127.0.0.1:3001';

let apiList = {
  login: host + '/user/login', // 登录
  regist: host + '/user/regist', // 注册
  getList: host + '/user/getList', // 获取列表
  deleteInfo: host + '/user/deleteInfo', // 删除信息
}

module.exports = apiList;