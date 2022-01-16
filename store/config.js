export const state = () => ({

})

export const actions = {
  async get(state, key) {
    const config = await this.$axios.$get(`/config?key=${key}`);
    return config.data;
  }
}

export const getters = {
  getDrawer: (state) => state.drawer,
}
