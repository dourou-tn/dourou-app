<template>
  <div class="xs:w-full md:w-9/12 md:m-auto ">
    <img :src="banner" alt="" class="object-cover w-full">

    <div class="m-auto">

      <HomeAuctionList />

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      banner: require('~/assets/image/banner.jpg')
    }
  }
}
</script>
