<template>
  <form @keyup.enter="submitForm">
    <p class="text-purple-500 mb-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <!-- Lastname (only register) -->
    <div class="mb-4">
      <DouInput
        v-model="profile.lastname"
        :label="$t('global.auth.form.lastname.label')"
        :placeholder="$t('global.auth.form.lastname.placeholder')"
        :hint="$t('global.auth.form.lastname.hint')"
        :error="errors.lastname"
      />
    </div>

    <!-- Firstname (only register) -->
    <div class="mb-4">
      <DouInput
        v-model="profile.firstname"
        :label="$t('global.auth.form.firstname.label')"
        :placeholder="$t('global.auth.form.firstname.placeholder')"
        hint="Ne serra pas visible au public"
        :error="errors.firstname"
      />
    </div>

    <!-- Email (register and !register) -->
    <div class="mb-4">
      <DouInput
        type="email"
        v-model="profile.email"
        :label="$t('global.auth.form.email.label')"
        :placeholder="$t('global.auth.form.email.placeholder')"
        :error="errors.email"
      />
    </div>

    <!-- Username (only register) -->
    <div class="mb-4">
      <DouInput
        v-model="profile.username"
        :label="$t('global.auth.form.username.label')"
        :placeholder="$t('global.auth.form.username.placeholder')"
        :error="errors.username"
      />
    </div>

    <!-- Téléphone (only register) -->
    <div class="mb-4">
      <DouInput
        v-model="profile.phone"
        :label="$t('global.auth.form.phone.label')"
        :placeholder="$t('global.auth.form.phone.placeholder')"
        :error="errors.phone"
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
  created () {
    this.profile = {
      firstname: this.$auth.user.firstname,
      lastname: this.$auth.user.lastname,
      username: this.$auth.user.username,
      email: this.$auth.user.email,
      phone: this.$auth.user.phone,
    }
  },
  data() {
    return {
      profile: {},
      errors: {
        firstnam: null,
        lastname: null,
        username: null,
        email: null,
        phone: null,
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