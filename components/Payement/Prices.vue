<template>
  <!-- prices -->
  <div class="shadow rounded-md mb-5" v-if="this.prices.length">
    <ul class="divide-y divide-gray-200">
      <!-- PRICES ITEM -->
      <li v-for="(price, i) in prices" :key="i">
        <a class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-600 truncate">
                {{ price.label }}
              </p>
              <div class="ml-2 flex-shrink-0 flex">
                <p class="px-2 inline-flex text-md leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ $t('global.price', { price: price.price }) }}
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>

      <!-- TOTAL -->
      <li class="bg-gray-100">
        <a class="block hover:bg-gray-100">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-800 truncate font-bold">
                {{ $t('subscribe.tot_price') }}
              </p>
              <div class="ml-2 flex-shrink-0 flex">
                <p class="px-2 inline-flex text-md leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ $t('global.price', { price: this.totalPrice }) }}
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PayementPrices',
  props: {
    prices: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPrice () {
      return this.prices.reduce((acc, price) => acc + price.price, 0)
    }
  }
}
</script>