export const state = () => ({
  logged: null,
});

export const mutations = {
  SET_AUTH (state, user) {
    state.logged = user
  }
};

export const getters = {
  getDrawer: (state) => state.drawer,
};

export const actions = {
  // getDrawer: (state) => state.drawer,
  async login({ commit }, credentials) {
    try {
      const res = await this.$axios.$post('/auth/login', credentials)
      if (res) {
        commit('SET_AUTH', res)
      }
    } catch (error) {
      console.error(error);
    }
  },
  async register({ commit }, credentials) {
    try {
      const res = await this.$axios.$post('/auth/register', credentials)
      if (res) {
        commit('SET_AUTH', res)
      }
    } catch (error) {
      console.error(error);
    }
  },
};
