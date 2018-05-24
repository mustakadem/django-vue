<template>
  <div class="box" style="width: 300px;">
    <p class="title is-5">Hermandades Registradas</p>
    <p class="subtitle">La Lucha continua</p>
    <router-link :to="{ name: 'admin'}" exact>
      <a class="button is-primary">ADMINISTRAR HERMANDADES</a>
    </router-link>
    <hermandad v-for="hermandad in hermandades" :key="hermandad.id" :hermandad="hermandad"></hermandad>
  </div>
</template>

<script>
  import hermandad from '../components/Hermandad';
  import hermandadesApi from '../services/hermandadesApi';

  export default {
    data() {
      return {
        hermandades: {}
      }
    },
    mounted() {
      this.generarLista();
    },
    methods: {
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
  p, a, h1
    color: green
</style>
