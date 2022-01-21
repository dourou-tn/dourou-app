<template>
  <div class="page-home mt-5">
    <DouTitle :text="$t('packs.title')" />

    <section v-if="!selectedPack" class="antialiased bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <!-- Pricing -->
        <div class="max-w-5xl mx-auto">
            <!-- Pricing tabs -->
            <div class="grid grid-cols-12 gap-6">
                <!-- Tab 1 -->
                <div
                  class="relative col-span-full md:col-span-6 bg-white hover:shadow-md rounded-sm border border-gray-200"
                  v-for="pack in packs"
                  :key="pack.id"
                >
                    <div class="absolute top-0 left-0 right-0 h-0.5" :style="`background-color: ${pack.color}`" aria-hidden="true"></div>
                    <div class="px-5 pt-5 pb-6 border-b border-gray-200">
                        <header class="flex items-center mb-2">
                            <div class="w-6 h-6 rounded-full flex-shrink-0 me-3" :style="`background-color: ${pack.color}`">
                                <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                                </svg>
                            </div>
                            <h3 class="text-lg text-gray-800 font-semibold">{{ pack.name }}</h3>
                        </header>
                        <div class="text-sm mb-2">{{ pack.description }}</div>
                        <!-- Price -->
                        <div class="flex justify-around">
                          <div class="text-gray-800 font-bold mb-4">
                              <span class="text-3xl text-gray-700">{{ pack.nbr_tokens }}</span>
                              <span class="text-gray-500 font-medium"> {{ $t('global.wording.tokens') }}</span>
                          </div>
                          <div class="text-gray-800 font-bold mb-4">
                              <span class="text-3xl text-gray-700">{{ $t('global.price', { price: pack.price }) }}</span>
                              <!-- <span class="text-gray-500 font-medium"> tnd</span> -->
                          </div>
                        </div>
                        <!-- CTA -->
                        <button class="text-sm bg-orange-500 px-10 py-2 rounded-lg my-5 hover:shadow-md text-purple-500 w-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500" @click="choosePack(pack.id)">{{ $t('global.wording.buy') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section v-if="selectedPack" class="antialiased bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <img :src="token_img" width="100" alt="Image du jeton dourou.tn" class="mb-10 image__token mx-auto">

      <header class="flex items-center mb-2">
        <div class="w-6 h-6 rounded-full flex-shrink-0 mr-3" :style="`background-color: ${selectedPack.color}`">
            <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
            </svg>
        </div>
        <h3 class="text-lg text-gray-800 font-semibold">{{ selectedPack.name }} ({{ selectedPack.nbr_tokens }} {{ $t('global.wording.dourou') }})</h3>
      </header>
      

      <p class="p-5 text-gray-800">
        {{ selectedPack.description }}
      </p>

      <payement-prices :prices="[
        { label: $t('packs.labels.price', { nbr: selectedPack.nbr_tokens }), price: Math.round(selectedPack.price * 100) / 100 }
      ]" />

      <payement-methods @submit:method="buyPack" />

      <div class="text-center p-5">
        <span @click="cancelBuyPack" class="text-sm ml-2 bg-red-200 cursor-pointer text-red-600 px-5 py-1 rounded">{{ $t('global.wording.cancel') }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import DouTitle from 'dourou-components/DouTitle/index.vue';

export default {
  name: 'AchterDourou',
  components: { DouTitle },
  async mounted () {
    await this.$store.dispatch('packs/fetch');
  },
  computed: {
    packs () {
      return this.$store.getters['packs/packs'];
    }
  },
  data () {
    return {
      token_img: require('~/assets/image/token.png'),
      selectedPack: null
    }
  },
  methods: {
    choosePack (packId) {
      this.selectedPack = this.packs.filter(pack => pack.id === packId)[0];
    },
    async buyPack (method) {
      const response = await this.$store.dispatch('packs/buy', { pack_id: this.selectedPack.id, method });
      if (response === 200) {
        this.selectedPack = null;
        this.success = true;
      }
      await this.$auth.fetchUser();

    },
    cancelBuyPack () {
      this.selectedPack = null;
    }
  }
}
</script>
