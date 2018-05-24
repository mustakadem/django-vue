<template>
  <section class="container">
    <div class="columns">
      <div class="column is-narrow">
        <hermandadesRegistradas></hermandadesRegistradas>
      </div>
      <div class="column">
        <div class="box">
          <p class="title is-5">Historia</p>
          <p class="subtitle">Si continuas y lees la historia te convertiras en enemigo de Skynet</p>
          <redirectButton pathname="nuevaHermandad"></redirectButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import redirectButton from '../components/Redirect';
  import hermandadesRegistradas from '../components/Hermandades-Registradas'

  export default {
    data() {
      return {

      }
    },
    components: {
      redirectButton,
      hermandadesRegistradas
    }
  }
</script>

<style scoped lang="sass">
  .container
    padding-top: 30px
    padding-bottom: 50px
    body
      background-color: black
      height: 100%
    p, a, h1
      color: green
</style>
