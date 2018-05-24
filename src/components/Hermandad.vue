<template>
  <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      {{hermandad.nombre}}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
      Es la <strong>{{hermandad.id}}</strong> en registrarse y en dar el paso en la lucha contra Skynte
      <br>
      <strong>Se registro el:</strong>
      <br>
      <time :datetime="hermandad.fecha_creacion">{{hermandad.fecha_creacion}}</time>
      <br>
      <p>Por: <strong>{{hermandad.email_responsable}}</strong> </p>
    </div>
  </div>
</div>
</template>

<script>

  export default {
    props:['hermandad'],
    data(){
      return{};
    }
  }
</script>

<style scoped>

</style>
