<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="#" class="navbar-item">
          <img :src="icono" alt="" >
        </a>

      </div>
      <div class="navbar-end">

          <router-link   :to="{ name: 'home'}" exact>
            <a class="navbar-item">Historia</a>
          </router-link>
          <router-link :to="{ name: 'nuevaHermandad'}">
            <a class="navbar-item">Registrar Hermandad</a>
          </router-link>

      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        icono: "https://png.icons8.com/ios/1600/flamingo.png"
      }
    }
  }
</script>

<style scoped lang="sass">

  header
    display: flex
    justify-content: space-around
    align-items: center
    background-color: white
    border-bottom: 2px solid #c9d1d8
    color: green
    padding: 5px
    div#logo
      width: 33%
    nav
      flex-grow: 2
      ul
        padding: 10px
        display: flex
        justify-content: space-around
        list-style: none
        a
          text-decoration: none
          color: green

    .router-link-active
      border-bottom: 2px solid blue

</style>
