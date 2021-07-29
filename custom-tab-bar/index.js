Component({
  data: {
    selected: 0,
    backgroundColor: "#0099A8",
    color: "#666",
    selectedColor: "#8EC31F",
    list: [ {
      "pagePath": "../index/index",
      "text": "首页",
      "iconPath": "../image/tabbar/home.png",
      "selectedIconPath": "../image/tabbar/home_selected.png"
    },
    {
      "pagePath": "../logs/logs",
      "text": "消息",
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
      wx.switchTab({
        url
      })
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})