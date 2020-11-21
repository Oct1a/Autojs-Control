import Vue from 'vue'
import Vuex from 'vuex'

import state from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
import moduleA from '@/store/modules/moduleA'

// 安装VueX插件
Vue.use(Vuex)

// 2创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA
  }
})

export default store