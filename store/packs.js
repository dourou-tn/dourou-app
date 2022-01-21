export default {
  namespaced: true,

  state: () => ({
    packs: []
  }),

  getters: {
    packs: (state) => state.packs
  },

  actions: {
    async fetch({ commit }) {
      const res = await this.$axios.get('/packs')
      commit('SET_PACKS', res.data)
    },

    async buy({ commit }, { pack_id, method }) {
      const res = await this.$axios.post(`/client/packs/buy`, { pack_id, method });
      return res.status;
    }
  },

  mutations: {
    SET_PACKS(state, packs) {
      state.packs = packs;
    },
    ADD_PACK(state, pack) {
      state.packs.push(pack);
    },
    DELETE_PACK(state, packId) {
      state.packs = state.packs.filter((u) => u.id !== packId)
    }
  }
}
