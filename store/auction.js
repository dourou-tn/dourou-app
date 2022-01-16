export const state = () => ({
  upComingAuctions: [], 
})

export const getters = {
  getUpComingAuctions: (state) => state.upComingAuctions,
}

export const actions = {
  async getUpComingAuctions ({ commit }) {
    const response = await this.$axios.get('auctions/upcoming');
    commit('setUpComingAuctions', response.data)
  }
}

export const mutations = {
  setUpComingAuctions (state, auctions) {
    state.upComingAuctions = auctions
  }
}


