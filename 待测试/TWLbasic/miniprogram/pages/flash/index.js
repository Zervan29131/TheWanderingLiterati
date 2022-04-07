// miniprogram/pages/flash/index.js
var app = getApp()
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
    // 查看是否授权
     wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
            //  console.log(res.userInfo)
              app.globalData.userInfo = res.userInfo //用户信息
              db.collection('UserInfo').where({
                name: app.globalData.userInfo.nickName
              }).get().then(e => {
               // console.log(e)
                //如果没有注册过，注册
                //小程序端一般不请求数据库，如果有时间可以把这个写成云函数
                //正式版需要移除初始静夜思
                if (e.data.length == 0) {
                  const gameInfo = {
                       name: app.globalData.userInfo.nickName,
                       coins: "1",
                       tests: [],
                       videos: [{
                        image:"",
                        coins:"10",//获得金币数
                        name: "静夜思",
                        url: "cloud://cloud1-5geuzo8h61e6ab0a.636c-cloud1-5geuzo8h61e6ab0a-1310011202/cloudbase-cms/upload/2022-03-09/ll0lbv65nqt6xv6qrh7npn0regzmmba5_.mp4"
                      }],
                       tests:[{//不应该在这里操作，应该分库分表
                         title: "床前明月光",
                         right:"疑是地上霜",
                         a:"疑是地上霜",
                         b:"疑是地下霜",
                         c:"疑是地上雪",
                         d:"疑是地下雪"
                       }] 
                      }
                  db.collection('UserInfo').add({
                      data: gameInfo
                    })
                    .then(res => {
                 //     console.log(res)
                      getApp().globalData.gameInfo = gameInfo
                      wx.switchTab({
                        url: '../study/first/index',
                      })
                    })
                }
               else{
                getApp().globalData.gameInfo = e.data[0]
                wx.switchTab({
                  url: '../study/first/index',
                })
               } 
              })
            }
          })
        }
      }
    })
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

  }
})