export default {
  // 异步操作数据，与dispatch配合使用
  // context 上下文
  updataInfo(context, playload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('decrement')
        resolve("已经完成")
      }, 1000);
    })

  }
}