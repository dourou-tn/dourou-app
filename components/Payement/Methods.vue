<template>
  <div class="">
    <span class="text-gray-800">{{ $t('payement.methods.title') }}</span>
    <div class="flex justify-center">
      <button
        type="button"
        class="flex-col inline-flex items-center justify-end m-4 px-4 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gray-50 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-500"
        @click="submitPay('laposte')"
      >
        <img :src="images.posteTN" alt="">
        <span class="text-purple-500 text-md mt-2">{{ $t('subscribe.methods.laposte') }}</span>
      </button>
      <button
        type="button"
        class="flex-col inline-flex items-center justify-end m-4 px-4 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-gray-50 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-purple-500"
        @click="submitPay('cb')"
      >
        <img :src="images.cb" alt="">
        <span class="text-purple-500 text-md mt-2">{{ $t('subscribe.methods.cb') }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PayementMethods',
  data () {
    return {
      images: {
        posteTN: require('~/assets/image/la-poste-tunisienne.png'),
        cb: require('~/assets/image/master-card-visa.png'),
      }
    }
  },
  methods: {
    submitPay (method) {
      this.$emit('submit:method', method)
    }
  }
}
</script>