// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init(
  {
    env: "cloud1-7g0xlt177727b85b"
  }
)
const db = cloud.database()
// 获取列表
// 参数1:表名,参数2:数组
exports.main = async (event, context) => {

  const wxContext = cloud.getWXContext()
  const name = event.name//获取表名
  var list = event.list//获取可以看的列表
  
  return cloud.database().collection("userList").get({
    success(res){
      return res
    },
    fail(err){
      return err
    }
  })

}