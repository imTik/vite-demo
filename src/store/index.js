import { createStore } from 'vuex';

let store = {
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    countAdd(state) {
      state.count++;
    },
  },
  actions: {
    countHandle({ commit }) {
      commit('countAdd');
    },
  },
  getters: {
    COUNT: (state) => state.count,
  },
};

export default createStore(store);
