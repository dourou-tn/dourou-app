<template>
  <div>
    <button @click="getData">Click</button>
    {{ data }}
  </div>
</template>

<script>
export default {
  name: 'DemoApi',
  data () {
    return {
      data: '',
    }
  },
  methods: {
    async getData () {
      const json = await fetch('/api/getJSON');
      this.data = await json.json();
    }
  },
}
</script>