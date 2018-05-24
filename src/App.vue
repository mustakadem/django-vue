<template>
  <div id="app">
  <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/Header'
export default {
    name: 'App',
  components:{
    MyHeader,
  }
}
</script>

<style scoped lang="sass">
html, body
  margin: 0
  min-height: 100vh
  background-color: #dffcff
</style>
