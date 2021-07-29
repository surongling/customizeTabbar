Component({

   /**
   * 组件的属性列表
   */
  properties: {
    selected: {
      type: Number,
      default:0
    }
  }, 
  /**
   * 组件的数据
   */
  data: {
    selected: 0,
    color: "#666",
    selectedColor: "#8EC31F",
    list: [ 
      {
      "pagePath": "../new/new",
      "text": "滴滴",
      "iconPath": "../image/tabbar/home.png",
      "selectedIconPath": "../image/tabbar/home_selected.png"
    },
    {
      "pagePath": "../test/test",
      "text": "答答",
      "iconPath": "../image/tabbar/classify.png",
      "selectedIconPath": "../image/tabbar/classify_selected.png"
    }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.redirectTo({
        url
      })
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})