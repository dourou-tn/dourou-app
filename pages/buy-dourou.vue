<template>
  <div class="buy-dourou-page container mx-auto max-w-screen-md">
    <DouTitle :text="$t('packs.title')" />

    <section v-if="!selectedPack" class="px-16 antialiased bg-purple-300 shadow-md rounded pb-16 mb-4">
        <!-- Pricing -->
        <div class="max-w-5xl mx-auto">
          <p class="pt-10 pb-10 mb-5 text-purple-500 font-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur dolore repellat culpa? Atque beatae suscipit deleniti, quos aliquid, recusandae odio minus, exercitationem sequi velit illo aspernatur incidunt eveniet. Asperiores!
          </p>
            <!-- Pricing tabs -->
            <div class="grid grid-cols-12 gap-10">
                <!-- Tab 1 -->
                <div
                  class="relative col-span-full md:col-span-6 gap-1 bg-purple-100 shadow rounded-b"
                  v-for="pack in packs"
                  :key="pack.id"
                >
                    <div class="absolute top-0 left-0 right-0 h-0.5" :style="`background-color: ${pack.color}`" aria-hidden="true"></div>
                    <div class="px-5 pt-5 pb-6">
                        <header class="flex items-center mb-2">
                            <div class="w-6 h-6 rounded-full flex-shrink-0 me-3" :style="`background-color: ${pack.color}`">
                                <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                                    <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                                </svg>
                            </div>
                            <h3 class="text-lg text-purple-600 font-semibold">{{ pack.name }}</h3>
                        </header>
                        <div class="text-sm mb-2 text-gray-700">{{ pack.description }}</div>
                        <!-- Price -->
                        <div class="flex justify-around my-10">
                          <div class="text-purple-500 font-bold mb-4">
                              <span class="text-3xl text-purple-500">{{ pack.nbr_tokens }}</span>
                              <span class="text-purple-400 font-medium"> {{ $t('global.wording.tokens') }}</span>
                          </div>
                          <div class="text-gray-800 font-bold mb-4">
                              <span class="text-3xl text-purple-500">{{ $t('global.price', { price: pack.price }) }}</span>
                              <!-- <span class="text-gray-500 font-medium"> tnd</span> -->
                          </div>
                        </div>
                        <!-- CTA -->
                        <div class="text-center">
                          <DouButton
                            @click="choosePack(pack.id)"
                            :label="$t('global.wording.buy')"
                            class="w-full"
                          />
                        </div>
                        <!-- <button class="text-sm bg-orange-500 px-10 py-2 rounded-lg my-5 hover:shadow-md text-purple-500 w-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500"></button> -->
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section v-if="selectedPack" class="antialiased bg-purple-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <img :src="token_img" width="100" alt="Image du jeton dourou.tn" class="mb-10 image__token mx-auto">

      <header class="flex items-center mb-2">
        <div class="w-6 h-6 rounded-full flex-shrink-0 me-3" :style="`background-color: ${selectedPack.color}`">
            <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
            </svg>
        </div>
        <h3 class="text-lg text-gray-800 font-semibold">{{ selectedPack.name }} ({{ selectedPack.nbr_tokens }} {{ $t('global.wording.dourou') }})</h3>
      </header>
      

      <p class="mt-3 mb-3 text-purple-600">
        {{ selectedPack.description }}
      </p>

      <payement-prices :prices="[
        { label: $t('packs.labels.price', { nbr: selectedPack.nbr_tokens }), price: Math.round(selectedPack.price * 100) / 100 }
      ]" />

      <payement-methods @submit:method="buyPack" />

      <div class="text-center p-5">
        <DouButton
          @click="cancelBuyPack"
          :label="$t('global.wording.cancel')"
          color="red-200"
          textColor="red-600"
        />
        <!-- <span @click="cancelBuyPack" class="text-sm ml-2 bg-red-200 cursor-pointer text-red-600 px-5 py-1 rounded">{{ $t('global.wording.cancel') }}</span> -->
      </div>
    </section>
  </div>
</template>

<script>
import DouTitle from 'dourou-components/DouTitle/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import PayementMethods from '~/components/Payement/Methods.vue';
import PayementPrices from '~/components/Payement/Prices.vue';

export default {
  name: 'BuyDourou',
  transition: 'home',
  components: {
    DouTitle,
    DouButton,
    PayementMethods,
    PayementPrices,
  },
  middleware: 'auth',
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
