// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
    behaviorTest: {
      type: String // type一定要写
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function () { },
  methods: {
    myBehaviorMethod: function () {
      console.log('这个behavior的作用其实是把重复的代码抽成一个模块,引用这个模块的页面，可以任意调用这个模块里面的东西')
    }
  }
})