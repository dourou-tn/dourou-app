<template>
  <form @keyup.enter="submitForm">
    <p class="text-purple-500 mb-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>


    <!-- Password (register and !register) -->
    <div class="mb-6">
      <DouInput
        v-model="password"
        type="password"
        :label="$t('global.auth.form.password.label')"
        :placeholder="$t('global.auth.form.password.placeholder')"
        :error="errors.password"
      />
    </div>

    <!-- Confirm password (only register) -->
    <div class="mb-4">
      <DouInput
        v-model="password_confirmation"
        type="password"
        :label="$t('global.auth.form.password_confirmation.label')"
        :placeholder="$t('global.auth.form.password_confirmation.placeholder')"
        :error="errors.password_confirmation"
      />
    </div>

    <div class="flex items-center justify-between mt-10 text-start">
      <DouButton
        @click="submitForm"
        :label="$t('global.wording.confirm')"
      />
    </div>

  </form>

</template>

<script>
import DouInput from 'dourou-components/DouInput/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';

export default {
  name: 'ProfilAccountPage',
  components: { DouInput, DouButton },
  data() {
    return {
      password: null,
      password_confirmation: null,

      errors: {
        password: null,
        password_confirmation: null,
      }
    }
  },
  methods: {
    submitForm () {
      console.log(this.profile);
    }
  },
}
</script>