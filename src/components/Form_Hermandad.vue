<template>
  <div class="container">
    <div class="columns">
      <div class="column is-narrow">
        <div class="box" style="width: 300px;">
          <p class="title is-5">Hermandades Registradas</p>
          <p class="subtitle">La Lucha continua</p>
          <router-link   :to="{ name: 'admin'}" exact>
            <a class="button is-primary admin">ADMINISTRAR HERMANDADES</a>
          </router-link>
          <hermandad v-for="hermandad in hermandades" :key="hermandad.id" :hermandad="hermandad"></hermandad>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <p class="title is-5 is-success">Registra tu Hermandad</p>
          <p class="subtitle">Si desea presentar su simpecado ante la virgen claro...</p>
          <div class="box">
            <form method="post" @submit.prevent="crerHermandad" novalidate>
              <div class="field">
                <label class="label">Nombre</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="text" name="nombre" id="nombre" v-model="formulario.nombre"
                         placeholder="Nombre de la hermandad">

                  <span class="icon is-small is-left"><i class="fas fa-people-carry"></i></span>

                  <span v-if="errores.nombre" class="icon is-small is-right"><i class="fas fa-exclamation-triangle"></i></span>
                  <span v-else class="icon is-small is-right"><i class="fas fa-check"></i></span>

                </div>
                <div v-for="error in errores.nombre">
                  <p class="help is-danger">{{error}}</p>
                </div>
              </div>

              <div class="field">

                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="email" name="email" id="email"
                         v-model="formulario.email_responsable"
                         placeholder="Email del representante de la Hermandad">
                  <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>

                  <span v-if="errores.email_responsable" class="icon is-small is-right"><i
                    class="fas fa-exclamation-triangle"></i></span>
                  <span v-else class="icon is-small is-right"><i class="fas fa-check"></i></span>
                </div>
                <div v-for="error in errores.email_responsable">
                  <p class="help is-danger">{{error}}</p>
                </div>
              </div>

              <div class="field">
                <label class="label">Fecha en que se fundo la Hermandad</label>
                <div class="control">
                  <input class="input" type="date" name="fecha_creacion" id="fecha_creacion"
                         v-model="formulario.fecha_creacion">
                </div>

                <div v-for="error in errores.fecha_creacion">
                  <p class="help is-danger">{{error}}</p>
                </div>
              </div>
              <button class="button is-large is-success is-rounded">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import hermandad from '../components/Hermandad';
  import hermandadesApi from '../services/hermandadesApi';
  import axios from 'axios'

  axios.defaults.xsrfHeaderName = "X-CSRFToken";


  export default {
    created: function(){
      this.generarLista()
    },
    data() {
      return {
        formulario: {
          nombre: null,
          email_responsable: null,
          fecha_creacion: null,
        },
        errores: [],
        hermandades: {}

      }
    },
    methods: {
      crerHermandad: function () {

        axios.post("/hermandades/", this.formulario).then(response => {
          this.generarLista();
          this.formulario.nombre = null;
          this.formulario.email_responsable = '';
          this.formulario.fecha_creacion = '';
          this.errores = [];
        }).catch(error => {
          this.errores = error.response.data;


        })
      },
      generarLista() {
        return hermandadesApi.getListHermandades().then(data => {
          this.hermandades = data;
        })
      }
    },


    components: {
      hermandad
    }
  }
</script>

<style scoped lang="sass">
  .container
    padding-top: 30px
    body
      background-color: black
      height: 100%
  p, a, h1
    color: green
  a.admin
    margin-bottom: 20px
</style>
