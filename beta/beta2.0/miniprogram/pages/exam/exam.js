var app = getApp();
const db = wx.cloud.database(
  {env: "cloud1-7g0xlt177727b85b"}
);
const testList = db.collection('testList');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    testList: [],
  },
  /**
   * 跳转到题目页
   */
  gotoPage(e) {
    //     console.log(e.currentTarget.dataset.item)
    var str_json = JSON.stringify(e.currentTarget.dataset.item)
   // console.log(str_json)
    wx.navigateTo({
          url: '../exam/addContent/addContent?item='+str_json,//要跳转到的页面路径
 })  
 },
  // testList(e){
  //   console.log(e.currentTarget.dataset.item)
  //   var str_json = JSON.stringify(e.currentTarget.dataset.item)
  //  console.log(str_json)
  //   wx.navigateTo({
  //     url: '../exam/addContent?item='+str_json,
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    // 获取题库-函数执行
    this.gettestList()
  },

  // 获取题库-函数定义
  gettestList() {
    // var that = this
    // 显示 loading 提示框
    wx.showLoading({
      title: '拼命加载中'
    });
    // 构建查询条件
    testList.where({
      // 指定查询条件，返回带新查询条件的新的集合引用
      // chapter:1
      // true: test_list.exists(true)
    })
    .get()
    .then(res => {
      // 获取集合数据，或获取根据查询条件筛选后的集合数据。
      console.log('[云数据库] [testList] 查询成功')
      console.log(res.data)
      let data = res.data || [];
      
      // 将数据从逻辑层发送到视图层，通俗的说，也就是更新数据到页面展示
      this.setData({
        testList: res.data      });

      // 隐藏 loading 提示框
      wx.hideLoading();
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