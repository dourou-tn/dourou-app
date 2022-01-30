<template>
  <div>
    <a
      v-for="(icon, index) in icons"
      :href="icon.href"
      target="_blank"
      class="cursor-pointer hover:opacity-50"
      :key="index"
    >
      <font-awesome-icon
        :icon="['fab', icon.icon]"
        class="mx-2 fa-2x text-white"
      />
    </a>
  </div>
</template>
<script>
export default {
  name: 'SocialIcons',
  data() {
    return {
      icons: [
        { href: 'https://facebook.com', icon: 'facebook' },
        { href: 'https://instagram.com', icon: 'instagram' },
        { href: 'https://youtube.com', icon: 'youtube' },
      ]
    }
  }
}
</script>