// pages/challenge/options/options.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: null
  },
  judge(e){
    const ans = e.currentTarget.dataset.ans
    if(ans == this.data.obj.right){
     wx.showToast({
       title: '回答正确',
       icon: 'success',    
       duration: 2000,      //停留时间
     })
     setTimeout(function() {
       wx.switchTab({
         url: '../option',
       })
    }, 2000);
     
    }
    else{
     wx.showToast({
       title: '回答错误',
       icon: 'fail',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
       duration: 2000,      //停留时间
     })
 
    }
   },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var obj = JSON.parse(options.item);
    this.setData({
      obj: obj
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