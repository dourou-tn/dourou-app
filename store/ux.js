export const state = () => ({
  drawer: false,
})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer;
  },
  closeDrawer (state) {
    state.drawer = false;
  }
}

export const getters = {
  getDrawer: (state) => state.drawer,
}
