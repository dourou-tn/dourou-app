export const state = () => ({

})

export const actions = {
  async newsLetter(_, email) {
    const response = await this.$axios.$post(`/comingsoon/newsletter`, {email: email });
    return response;
  }
}

export const getters = {
  getDrawer: (state) => state.drawer,
}
