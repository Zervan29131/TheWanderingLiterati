// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

//获取用户信息
/**
 * 扫描过的视频
 * 可以做的题目
 * 金币等存在云端
 */
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}