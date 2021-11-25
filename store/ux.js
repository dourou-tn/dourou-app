export const state = () => ({
  drawer: false,
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer;
  }
}

export const getters = {
  getDrawer: (state) => state.drawer,
}
