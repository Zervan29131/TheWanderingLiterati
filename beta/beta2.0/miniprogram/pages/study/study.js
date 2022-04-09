var app = getApp()
const db = wx.cloud.database(
  {env: "cloud1-7g0xlt177727b85b"}
);
const video_list = db.collection('video_list');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    video_list: [],
    // app.globalData.videos
  },
  /**
   * 跳转到视频页
   */
  toVideo(e) {
    console.log(e.currentTarget.dataset.url)
    const URL = e.currentTarget.dataset.url
    wx.navigateTo({
      url: '../study/toVideo/toVideo?url=' + URL
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(getApp().globalData.gameInfo)

        // 获取题库-函数执行
        this.getvideoList()

    // this.setData({
    //   video_list: getApp().globalData.gameInfo.videos
    // })
  },
      // 获取题库-函数定义
  getvideoList() {
    // var that = this
    // 显示 loading 提示框
    wx.showLoading({
      title: '拼命加载中'
    });
    // 构建查询条件
    video_list.where({
      // 指定查询条件，返回带新查询条件的新的集合引用
      // chapter:1
      // true: test_list.exists(true)
    })
    .get()
    .then(res => {
      // 获取集合数据，或获取根据查询条件筛选后的集合数据。
      console.log('[云数据库] [videoList] 查询成功')
      console.log(res.data)
      let data = res.data || [];
      
      // 将数据从逻辑层发送到视图层，通俗的说，也就是更新数据到页面展示
      this.setData({
        video_list: res.data      });

      // 隐藏 loading 提示框
      wx.hideLoading();
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