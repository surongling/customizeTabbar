// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [
      {
        title: '商品',
        id: '1',
        closeTime: '2021-6-10 14:22:33',
        remainTime: 50000,
        status:0
      },
      {
        title: '商品2',
        id: '2',
        closeTime: '2021-6-10 14:22:33',
        remainTime: 80000,
        status:0
      },
      {
        title: '商品3',
        id: '3',
        closeTime: '2021-6-10 14:22:33',
        remainTime: 90000,
        status:0
      },
    ],
    listData: [],
    clearTimeData: ''
  },

  
  /**
   * 倒计时
   */
  setCountDown: function () {
    let time = 1000;
    let { listData } = this.data; 
    if (listData.length < 1) {
      clearTimeout(this.data.clearTimeData)
      return
    }
    for (let i = 0; i < listData.length; i++) {
      if (listData[i].remainTime <= 0) {
        console.log("倒计时结束" + listData[i].memberNickname);
        listData.splice(i, 1);
        continue;
      }
      if(listData[i].status == 0) {
        let formatTime = this.getFormat(listData[i].remainTime);
        listData[i].remainTime -= time;
        listData[i].countDown = `${formatTime.hh}:${formatTime.mm}:${formatTime.ss}`; 
      }
    }

    this.setData({
      listData: listData
    });
    this.data.clearTimeData = setTimeout(this.setCountDown, time);
  },
 
  /**
   * 格式化时间
   */
  getFormat: function (msec) {
    let ss = parseInt(msec / 1000); let ms = parseInt(msec % 1000); let mm = 0; let hh = 0; if (ss > 60) {
      mm = parseInt(ss / 60);
      ss = parseInt(ss % 60); if (mm > 60) {
        hh = parseInt(mm / 60);
        mm = parseInt(mm % 60);
      }
    }
    ss = ss > 9 ? ss : `0${ss}`;
    mm = mm > 9 ? mm : `0${mm}`;
    hh = hh > 9 ? hh : `0${hh}`; return { ms, ss, mm, hh };
  },

  onLoad() {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return {
    //       date: util.formatTime(new Date(log)),
    //       timeStamp: log
    //     }
    //   })
    // })
    

  },
    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 放在onLoad生命周期中会出现点一次tabbar状态切换不成功，需要点第二次才成功的bug
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }

    let list = [
      {
        id: 1,
        memberNickname: '列表1',
        remainTime: 50000,
        status:0
      },
      {
        id: 2,
        memberNickname: '列表2',
        remainTime: 60000,
        status: 0
      },
      {
        id: 3,
        memberNickname: '列表3',
        remainTime: 70000,
        status: 0
      }
    ];
    this.setData({
      listData: list,
      clearTimeData: ''
    });
    this.setCountDown();
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // 当页面隐藏时关闭定时器（关闭实时刷新）
    clearTimeout(this.data.clearTimeData)
  },
   /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  

})
