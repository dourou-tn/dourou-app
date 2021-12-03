<template>
  <div class="page-home">

    <h2 class="text-purple font-bold text-2xl text-center font-medium my-10">
      {{ register ? 'Inscription' : 'Se connecter' }}
    </h2>

    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <p class="text-center text-gray-500 mb-5">
        <span v-text="register ? `Vous avez déjà un compte?` : `Vous n'avez pas de compte?` ">
        </span>
        <DouHref
          @click="toggleRegister"
          :text="register ? 'Connexion' : 'Inscription'"
        />.
      </p>

      <!-- Lastname (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.lastname"
          label="Nom"
          placeholder="ex: Ben Falten"
          hint="Ne serra pas visible au public"
          :error="errors.lastname"
        />
      </div>

      <!-- Firstname (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.firstname"
          label="Prénom"
          placeholder="ex: Flen"
          hint="Ne serra pas visible au public"
          :error="errors.firstname"
        />
      </div>

      <!-- Email (register and !register) -->
      <div class="mb-4">
        <DouInput
          type="email"
          v-model="user.email"
          label="Email"
          placeholder="Votre email"
          :error="errors.email"
        />
      </div>

      <!-- Password (register and !register) -->
      <div class="mb-6">
        <DouInput
          v-model="user.password"
          type="password"
          label="Mot de passe"
          placeholder="*********"
          :error="errors.password"
        />
      </div>

      <!-- Confirm password (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.confirm_password"
          type="password"
          label="Confirmez votre mot de passe"
          placeholder="********"
          :error="errors.confirm_password"
        />
      </div>

      <!-- Username (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.username"
          label="Pseudo"
          placeholder="Pseudo de jeu"
          :error="errors.username"
        />
      </div>

      <!-- Téléphone (only register) -->
      <div class="mb-4" v-if="register">
        <DouInput
          v-model="user.phone"
          label="Téléphone"
          placeholder="ex: 55 555 555"
          :error="errors.phone"
        />
      </div>

      <div class="flex items-center justify-between">
        <DouButton
          @click="submitForm"
          label="Se connecter"
        />

        <DouHref
          @click="toggleRegister"
          text="Mot de passe oublié?"
        />

      </div>

    </form>

  </div>
</template>

<script>
import DouInput from 'dourou-components/DouInput/index.vue';
import DouButton from 'dourou-components/DouButton/index.vue';
import DouHref from 'dourou-components/DouHref/index.vue';

export default {
  name: 'PageAuth',
  middleware: 'auth',
  auth: 'guest',
  components: {
    DouInput,
    DouButton,
    DouHref,
  },
  data() {
    const defaultErrors = {
      email: null,
      password: null,
      confirm_password: null,
      username: null,
      phone: null,
      firstname: null,
      lastname: null,
    };

    return {
      user: {
        email: '',
        password: '',
        confirm_password: '',
        username: '',
        phone: '',
        firstname: '',
        lastname: '',
      },
      register: false,
      defaultErrors: defaultErrors,
      errors: Object.assign({}, defaultErrors),
    }
  },
  methods: {
    async submitForm(e) {
      this.errors = [];
      this.register ? this.validateRegister() : this.validateLogin();

      if (Object.values(this.errors).filter(Boolean).length) {
        console.error(this.errors);
        return;
      }

      this.register ?
        await this.submitRegister() :
        await this.submitLogin();
    },
    validateLogin() {
      if (!this.user.email) this.errors.email = 'L\'email est obligatoire!';
      if (!this.user.password) this.errors.password = 'Le mot de passe est obligatoire!';
    },
    validateRegister() {
      this.validateLogin();
      if (!this.user.phone) this.errors.phone = 'Le téléphone est obligatoire!';
      if (!this.user.username) this.errors.username = 'Le pseudo est obligatoire!';
      if (!this.user.firstname) this.errors.firstname = 'Le prénom est obligatoire!';
      if (!this.user.lastname) this.errors.lastname = 'Le nom est obligatoire!';
      if (!this.user.confirm_password) this.errors.confirm_password = 'Les mots de passe doivent être identique!';
    },
    async submitLogin() {
      await this.$auth.loginWith('local', { data: {
        email: this.user.email,
        password: this.user.password,
      }})
    },
    async submitRegister() {
      const res = await this.$axios.$post('/auth/register', {
        email: this.user.email,
        password: this.user.password,
        phone: this.user.phone,
        username: this.user.username,
        lastname: this.user.lastname,
        firstname: this.user.firstname,
        confirm_password: this.user.confirm_password,
      })
      await this.$auth.setUserToken(res.data.token)
    },
    toggleRegister () {
      this.register = !this.register
    },
    resetErrors () {
      this.errors = Object.assign({}, this.defaultErrors);
    }
  },
  watch: {
    user: {
      handler () {
        this.resetErrors();
      },
      deep: true,
    }
  }
}
</script>
