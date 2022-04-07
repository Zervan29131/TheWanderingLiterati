var app = getApp()
// pages/First/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    video_list: []
    // app.globalData.videos
  },
  /**
   * 跳转到视频页
   */
  toVideo(e) {
    console.log(e.currentTarget.dataset.url)
    const URL = e.currentTarget.dataset.url
    wx.navigateTo({
      url: '/study/toVideo/toVideo?url=' + URL
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.gameInfo)
    this.setData({
      video_list: getApp().globalData.gameInfo.videos
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  //页面展示时，触发动画
  onShow: function () {
    app.slideupshow(this, 'slide_up', "", 1)
    
  },

  //页面隐藏时，触发渐出动画
  onHide: function () {
    //使页面重新打开时重新展示动画
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
   * 刷新
   */
  onReachBottom: function () {

  },


})