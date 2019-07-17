// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb: '',
    nickname: '',
    orders: [],
    hasAddress: false,
    address: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success:function(res){
        self.setData({
          thumb:res.userInfo.avatarUrl,
          nickname:res.userInfo.nickName
        })
      },
      fail:function(){
        console.log("授权失败")
      }
    })
    /**
     * 获取订单列表信息
     */
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d2c21d3273ec4072f2d2b31/wechat_sun/orders',
      success:function(res){
          self.setData({
            orders:res.data
          })
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
    /**
     * 获取本地缓存的地址信息
     */
    var self = this;
    wx.getStorage({
      key: 'address',
      success: function(res) {
        self.setData({
            hasAddress : true,
            address:res.data
        })
      },
    })
  },
  /**
   * 发起支付请求
   */
  payOrders(){
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success:function(res){
        console.log(res)
      },
      fail:function(res){
        wx.showModal({
          title: '支付提示',
          content: '<text>',
          showCancel:false
        })
      }
    })
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