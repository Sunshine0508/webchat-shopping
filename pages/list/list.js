// pages/list/list.js
let appDatas = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:null,
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const detailsArr = appDatas.data.detailsArr;
    let detailList = [];
    detailsArr.forEach(item=>{
      if (item.id === options.id){
        detailList = item.detail;
      }
    });
    // let newList ={}
    detailList.forEach(val => {
      if (val.name === options.name) {
        this.setData({
          detailObj: val
        })
      }
    })
    console.log(this.data.detailObj);
  },
  // 数量的添加
  addCount(){
    let num = this.data.num;
    num++;
    this.setData({
      num:num
    })
  },
  // 加入购物车
  addToCart() {
    const that = this;
    const num = this.data.num;
    let total = this.data.totalNum;
    this.setData({
      show:true
    })
    setTimeout(function(){
      that.setData({
        show:false,
        scaleCart:true
      })
      setTimeout(function(){
        that.setData({
          scaleCart: false,
          hasCarts: true,
          totalNum: num + total
        })
      },200)

    },300)
  },

  bindTap(e){
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex:index
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