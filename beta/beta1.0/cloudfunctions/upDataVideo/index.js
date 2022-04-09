// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//此功能因为程序未上架所以无法使用
//视频的添加只能由cms手动添加
// 创建，修改视频的时候，更新二维码并上传
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var item = event.payload
  
  //阻塞获取二维码生成token
  const token = await getToken()
  console.log(token)
  if(token == null) return
  //阻塞获得二维码url
  const code = await getCode(token,item.name)
  console.log(code)
}
function getToken(){
  const id = "wx1db2838db6d33694"
  const secret = "8ae0755210c9c64e55f41b05229c3f7e"
  const type = "client_credential"
  return got("https://api.weixin.qq.com/cgi-bin/token",{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    },
    body:{
      appid: id,
      secret: secret,
      grant_type: type
    }
  })

}
//传递名称，返回一个带名称参数带二维码
//当用户跳转时页面根据名称在数据库中搜索展示
function getCode(token,name){
  return got('https://api.weixin.qq.com/wxa/getwxacode?access_token='+token ,{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:{
      path : "miniprogram/pages/study/second/index.wxml?name=" + name
    }
  })
}