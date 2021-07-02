
Page({
  data: {
    dataTree: [
      {
        id: 1,
        name: '一级A',
        status: 1,
        children: [
          {
            id: 23,
            name: '二级A-a',
            status: 1,
            children: [
              {
                id: 98,
                name: '三级A-a-1',
                status: 1,
              }
            ]
          },
          {
            id: 20,
            name: '二级A-b',
            status: 2,

          }
        ]
      },
      {
        id: 2,
        name: '一级B',
        status: 2,
        children: [
          {
            id: 21,
            name: '二级B-a',
            status: 2,
          }
        ]
      }
    ],
    selectKey: '', //选中的节点id
  },
  handleSelect(e) {
    if (e.detail.tips) {
      console.log('必须选择到最后一个节点')
    } else {
      this.setData({
        selectKey: e.detail.item.id
      })
    }
  },
  onLoad: function () {
  }
})
