// app.js
App({
  
  globalData:{
    userInfo: [],
    gameInfo: []
    },
  //滑动渐入渐出
  slideupshow:function(that,param,px,opacity){
    var animation = wx.createAnimation({
     duration: 800,
     timingFunction: 'ease',
    });
    animation.translateY(0).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
   },
  // onLaunch() {
  //   wx.cloud.init({
  //     traceUser: true,
      
  //   })
  //   //请求获取用户信息
  //   //加载用户资料
  // },
  onLaunch: function () {
    // 展示本地存储能力
    wx.cloud.init({
      traceUser: true,
      env:'cloud1-7g0xlt177727b85b'
    })
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  }

})
// app.js