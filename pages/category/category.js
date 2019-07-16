// pages/category/category.js
let appDatas = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      { name: '时令水果', id: 'fruit' },
      { name: '新鲜蔬菜', id: 'vegetables' },
      { name: '水产海鲜', id: 'seafood' },
      { name: '休闲零食', id: 'snacks' },
      { name: '酒水饮料', id: 'drinks' }
    ],
    detail:[],
    curIndex:0,
    isScroll:false,
    toView:'fruit'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  switchTab(e) {
    console.log(e);
    const self = this;
    this.setData({
      isScroll:true
    })
    setTimeout(function(){
      self.setData({
        toView:e.target.dataset.id,
        curIndex:e.target.dataset.index
      })
    },0)
    setTimeout(function(){
      self.setData({
        isScroll: false
      })
    },1)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    wx.request({
      url:"https://www.easy-mock.com/mock/5d2c21d3273ec4072f2d2b31/wechat_sun/category",
      success:res=>{
        self.setData({
          detail:res.data
        });
        
        appDatas.data.detailsArr = res.data;
      }
    })
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