import { INCREMENT } from '@/store/mutations-types.js' //引用常量


export default {
  [INCREMENT]: state => state.counter++,
  decrement: state => state.counter--,
  incrementCount: (state, playload) => state.counter += playload.count,
  updateState(state) {
    // 添加
    // state.info['address'] = "洛杉矶" //这种方式无效，无法响应式
    Vue.set(state.info, 'address', '洛杉矶') //增加元素
      // 删除
      // delete state.info.age //这种删除也无法响应式
    Vue.delete(state.info, 'age') //删除元素
  }
}