// pages/exam/index.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    test_list: []
  },
  toTest(e){
    console.log(e.currentTarget.dataset.item)
    var str_json = JSON.stringify(e.currentTarget.dataset.item)
   // console.log(str_json)
    wx.navigateTo({
      url: '../second/index?item='+str_json,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      test_list: getApp().globalData.gameInfo.tests
    })
    console.log(this.data.test_list)
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