export const state = () => ({

})

export const actions = {
  async bid(state, payload) {
    const bid = await this.$axios.$post(`/client/room/bid`, {
      auction_id: payload.auction_id,
      amount: payload.amount,
    });
    return bid;
  }
}

export const getters = {
  getDrawer: (state) => state.drawer,
}
