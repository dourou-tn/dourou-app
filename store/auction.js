export const state = () => ({
  // 
})

export const getters = {
  // 
}

export const actions = {
  async get(_, id) {
    const res = await this.$axios.get(`/auctions/${id}`);
    return res.data;
  },

  async subscribe ({ commit }, auction_id) {
    const res = await this.$axios.post(`/client/auctions/subscribe`, { auction_id: auction_id});
    return res.data;
  },

}

export const mutations = {
  // 
}


