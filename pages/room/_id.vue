<template>
  <div class="page-contact max-w-screen-md mx-auto">
    <DouTitle text="Enchere en cours" />
    <DouLoader v-if="$fetchState.pending" />
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <DouCard v-else class="py-12 mb-20">
      <!-- <div class="mb-12">
        <img class="rounded-md mx-auto" :src="`http://localhost:5000/${auction.product.image_path}`">
      </div> -->
      <Timer :date="$moment(auction.end_date).format('YYYY-MM-DD HH:mm:ss')"  class="text-4xl font-bold text-purple-500 mb-12"/>

      <div class="flex justify-around mb-12 text-center">
        <div>
          <div class="text-2xl font-bold text-gray-800">123.10 DT</div>
          <div class="text-gray-500">Prix actuel</div>
        </div>
        <div>
          <div class="text-2xl font-bold text-gray-800">TH3 JoK3</div>
          <div class="text-gray-500">Dernier Enchèreur</div>
        </div>
      </div>

      <div class="mb-12">
        <p class="ms-5 text-gray-500 mb-1">Un click coute 1 DOUROU</p>
        <div class="flex justify-around">
          <DouButton
            label="+100"
            class="w-full mx-5"
          />

          <DouButton
            label="+200"
            class="w-full mx-5"
          />
        </div>
      </div>

      <div class="">
        <p class="ms-5 text-gray-500 mb-1">Vous pouvez acheter + de DOUROU</p>
        <div class="flex mx-5">
          <DouButton
            label="Acheter des DOUROU"
            color="orange-500"
            textColor="purple-500"
            class="w-full"
          ></DouButton>
        </div>
      </div>
    </DouCard>
  </div>
</template>

<script>
import Timer from '@/components/Timer/index.vue';
import DouTitle from 'dourou-components/DouTitle/index.vue';
import DouCard from 'dourou-components/DouCard/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import DouLoader from 'dourou-components/DouLoader/index.vue';


export default {
  name: 'Room',
  components: { DouTitle, DouCard, DouButton, Timer, DouLoader},
  data () {
    return {
      auction: null,
    }
  },
  async fetch() {
    const { id } = this.$route.params;
    const response = await this.$axios.post('client/room', { auction_id: id });
    this.auction = response.data;
  },
}
</script>