<template>
  <div>
    <div class="hidden sm:block">
      <button class="bg-orange text-sm font-thin px-5 py-1 w-36 rounded">Se Connecter</button>
      <button class="bg-orange text-sm font-thin px-5 py-1 w-36 rounded">S'inscrire</button>
    </div>

    <div class="block sm:hidden">
      <box-icon name='user-circle' class="mt-2" color="orange"></box-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthenticationButtons',
  }
</script>
