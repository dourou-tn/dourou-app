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
  },

  async get(_, id) {
    const res = await this.$axios.get(`/auctions/${id}`);
    return res.data;
  },

  async subscribe ({ commit }, auction_id) {
    const res = await this.$axios.post(`/auctions/subscribe`, { auction_id: auction_id});
    return res.data;
  },

}

export const mutations = {
  setUpComingAuctions (state, auctions) {
    state.upComingAuctions = auctions
  }
}


