<!-- A vue.js form to create a user -->
<template>
  <div>
    <h1>Create a new user</h1>
    <form @submit.prevent="onSubmit" @keydown.enter.prevent="onSubmit">
      <!-- role -->
      <div class="form-control mt-5 mb-5">
        <select class="select select-bordered select-primary w-full " v-model="user.role_id">
          <option value="2" selected>Utilisateur</option> 
          <option value="1">Admin</option> 
        </select>
      </div>
      <!-- username -->
      <DouInput
        v-model="user.username"
        label="Username"
        placeholder="ex: John Hitman 07"
        :error="errors.username"
        dark
      />
      <!-- firstname & lastname -->
      <div class="flex justify-between mt-5">
        <DouInput
          v-model="user.lastname"
          label="Nom"
          placeholder="ex: Ben Falten"
          :error="errors.lastname"
          dark
          class="flex-1 mr-2"
        />
        <DouInput
          v-model="user.firstname"
          label="Prénom"
          placeholder="ex: Flen"
          :error="errors.firstname"
          dark
          class="flex-1 ml-2"
        />
      </div>
      <!-- phone -->
      <DouInput
        v-model="user.phone"
        label="Téléphone"
        placeholder="ex: 22 555 555"
        :error="errors.phone"
        dark
        class="mt-5"
      />
      <!-- email -->
      <DouInput
        v-model="user.email"
        type="email"
        label="Email"
        placeholder="ex: myemail@gmail.com"
        :error="errors.email"
        dark
        class="mt-5"
      />
      <!-- password -->
      <div class="flex justify-between">
        <DouInput
          v-model="user.password"
          type="password"
          label="Mot de passe"
          placeholder="ex: ********"
          :error="errors.password"
          dark
          class="mt-5 mr-1"
        />
        <DouInput
          v-model="user.password_confirmation"
          type="password"
          label="Confirmation Mot de passe"
          placeholder="ex: ********"
          :error="errors.password_confirmation"
          dark
          class="mt-5 ml-1"
        />
      </div>
      <!-- buttons -->
      <div class="modal-action">
        <a class="btn btn-primary" @click="save">Enregistrer</a> 
        <a class="btn" @click="closeForm">Fermer</a>
      </div>
    </form>
  </div>
</template>
<script>
import { validateInputs } from '~/helpers/Validator';
import DouSelect from 'dourou-components/DouSelect/index.vue';
import DouInput from 'dourou-components/DouInput/index.vue';

export default {
  name: "UserForm",
  components: { DouSelect, DouInput },
  data() {
    return {
      user: {
        username: null,
        email: null,
        lastname: null,
        firstname: null,
        phone: null,
        role_id: 2,
        password: null,
        password_confirmation: null,
      },
      errors: {
        username: null,
        email: null,
        lastname: null,
        firstname: null,
        phone: null,
        password: null,
        password_confirmation: null,
      }
    };
  },
  methods: {
    save() {
      this.errors = validateInputs(this.user, {
        username: "required",
        email: "email",
        lastname: "required",
        firstname: "required",
        phone: "required",
        password: "min:4",
        password_confirmation: "same:password",
        role_id: "numeric"
      });
    },
    closeForm() {
      this.$emit("form:close");
    }
  },
}
</script>