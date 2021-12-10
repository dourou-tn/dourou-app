<!-- A vue.js form to create a user -->
<template>
  <div>
    <h1>Create a new user</h1>
    <form @submit.prevent="onSubmit" @keydown.enter.prevent="onSubmit">
      <!-- role -->
      <div class="form-control mx-5 mt-5 mb-5">
        <select class="select select-bordered select-primary w-full " v-model="user.role_id">
          <option value="2" selected>Utilisateur</option> 
          <option value="1">Admin</option> 
        </select>
      </div>
      <!-- username -->
      <div class="form-control mx-5">
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input type="text" placeholder="Nom de joueur" class="input input-bordered" v-model="user.username">
      </div>
      <!-- firstname & lastname -->
      <div class="flex justify-evenly align-center">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nom</span>
          </label>
          <input type="text" placeholder="ex: Ben Falten" class="input input-bordered" v-model="user.lastname">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Prénom</span>
          </label>
          <input type="text" placeholder="ex: Flen" class="input input-bordered" v-model="user.firstname">
        </div>
      </div>
      <!-- phone -->
      <div class="form-control mx-5">
          <label class="label">
            <span class="label-text">Téléphone</span>
          </label>
          <input type="text" placeholder="ex: 22 555 555" class="input input-bordered" v-model="user.phone">
      </div>
      <!-- email -->
      <div class="form-control mx-5 mt-10">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type="text" placeholder="ex: jean@dourou.tn" class="input input-bordered" v-model="user.email">
      </div>
      <!-- password -->
      <div class="flex justify-evenly">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Mot de passe</span>
          </label>
          <input type="password" placeholder="ex: ********" class="input input-bordered" v-model="user.password">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Confirmation Mot de passe</span>
          </label>
          <input type="password" placeholder="ex: ********" class="input input-bordered" v-model="user.password_confirmation">
        </div>
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
import { validateForm } from '~/helpers/InputValidation';
import DouSelect from 'dourou-components/DouSelect/index.vue';

export default {
  name: "UserForm",
  components: { DouSelect },
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
      this.errors = validateForm(this.user, {
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