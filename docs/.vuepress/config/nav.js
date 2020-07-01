module.exports = [
  {text: '首页', link: '/'},
  {
    text: 'Java',
    link: '/java/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {text: '后端文章', items: [
        {text: 'HashMap', link: '/pages/collection/hashMap/data-structure'}, // 注意link结尾有斜杠和没有斜杠的区别
      ]},
      {text: '学习笔记', items:[
        {text: '《深入理解Java虚拟机》笔记', link: '/note/jvmBook/'},
        {text: '《深入理解JVM字节码》', link: '/note/jvmBook/'},
        {text: '《Effective Java中文版》', link: '/note/jvmBook/'},
      ]}
    ]
  },
  {
    text: 'JVM',
    link: '/jvm/',
    items: [
      {text: '类加载子系统', link: '/pages/jvm/'},
      {text: '运行时数据区', link: '/pages/jvm/'},
      {text: '执行引擎', link: '/pages/jvm/'},
    ]
  },
  {
    text: '框架',
    link: '/frame/',
    items: [
      {text: 'spring', link: '/pages/frame/'},
      {text: 'mybatis', link: '/pages/frame/'},
      {text: 'dubbo', link: '/pages/frame/'},
    ]
  },
  {
    text: '其他',
    link: '/other/',
    items: [
      {text: '学习', link: '/pages/other/'},
      {text: '面试', link: '/pages/other/'},
      {text: '心情杂货', link: '/pages/other/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'},
      {text: 'Java资源', link: '/pages/12df8ace52d493f6/'},
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]