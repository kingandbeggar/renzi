import { login } from '@/api/user'
import { getToken, removeToken } from '@/utils/auth'
export default {
  namespaced: true,
  actions: {
    async login({ commit }, data) {
      // 能走下去说明success：true
      const res = await login(data)
      commit('LOGIN', res)
      // 能拿await接住这个结果
      return res
    }
  },
  mutations: {
    LOGIN(state, res) {
      state.token = res.data
    },
    LOGOUT(state) {
      state.token = ''
      removeToken()
    }
  },
  state: {
    token: getToken() || null
  }
}
