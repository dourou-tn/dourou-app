<template>
  <div class="auctions-live-page container mx-auto px-0 md:px-5">
    <DouTitle :text="$t('auction.live.title')" />
    
    <div class="max-w-screen-lg mx-auto">
      <div
        v-if="!auctions.length" v-text="'Aucune enchère pour le moment'"
        class="sm:my-8 bg-purple-300 text-purple-600 text-center shadow-md rounded-lg px-8 py-8"
      />
      <DouGrid v-else>
        <AuctionLive
          v-for="(auction, i) in auctions"
          :key="i"
          :auction="auction"
        />
      </DouGrid>
    </div>
  </div>
</template>

<script>
import DouTitle from 'dourou-components/DouTitle/index.vue';
import DouGrid from 'dourou-components/DouGrid/index.vue';
import AuctionLive from '~/components/Auction/AuctionLive.vue';

export default {
  name: 'AuctionsCurrent',
  transition: 'home',
  components: { DouTitle, AuctionLive, DouGrid },
  data () {
    return {
      auctions: [],
    }
  },
  async fetch() {
    this.auctions = (await this.$axios.get('client/auctions/live')).data;
  },
}
</script>
