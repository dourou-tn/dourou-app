export default {
  strategies: {
    local: {
      token: {
        property: 'token',
        global: true,
        // required: true,
        // type: 'Bearer'
      },
      user: {
        property: 'user',
        autoFetch: true
      },
      endpoints: {
        login: { url: '/auth/login', method: 'post' },
        logout: { url: '/auth/logout', method: 'post' },
        user: { url: '/auth/user', method: 'get' }
      }
    }
  }
}