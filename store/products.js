export const state = () => ({
  // 
})

export const getters = {
  // 
}

export const actions = {
  async get(_, id) {
    const res = await this.$axios.get(`/products/${id}`);
    return res.data;
  },

}

export const mutations = {
  // 
}


