// pages/third/index.js
const app = getApp()
Page({
  data: {
    userInfo: null,
    gameInfo: null,
    List:[
      {
        url:"", //商品照片
        text: "盲盒商品",
        detail: "猜猜里面有什么？",
        cost: "999"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
      gameInfo: app.globalData.gameInfo
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
    app.slideupshow(this, 'slide_up', "", 1)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    app.slideupshow(this, 'slide_up', "", 0)
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