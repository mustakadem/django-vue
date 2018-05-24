<template>
    <div class="container">
    <div class="column is-three-fifths is-offset-one-fifth">
      <form method="post" @submit.prevent="login">
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Text input" id="username" name="username" v-model="username">
            <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
            <!--<span class="icon is-small is-right"><i class="fas fa-check"></i></span>-->
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="password" placeholder="Text input" id="password" name="password"
                   v-model="password">
            <span class="icon is-small is-left"><i class="fas fa-key"></i></span>
            <!--<span class="icon is-small is-right"><i class="fas fa-check"></i></span>-->
          </div>
        </div>
        <button class="button is-success">Entrar en el sistema</button>
      </form>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  axios.defaults.xsrfHeaderName = "X-CSRFToken";

    export default {
        name: "Login",
      data() {
      return {
        username: null,
        password: null,
      }
    },
    methods:{
      login(){
        const credenciales = {username:this.username, password: this.password};

        axios.post('auth/token/create/',credenciales).then(response => {
          sessionStorage.setItem('authToken', response.data.auth_token);
          sessionStorage.setItem('username', this.username);
          this.$router.push('/admin/panel/')
        }).catch(response => {
          console.log(response)
        });
      }
    }
    }
</script>

<style scoped lang="sass">
  .container
    padding-bottom: 100px
    padding-top: 100px
</style>
