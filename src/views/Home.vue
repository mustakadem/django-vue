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
          <button type="button" id="mostrarHistoria" @click="mostrar">Leer</button>
          <div v-if="mostrarTexto" class="box">
            <div class="columns">
              <div class="column">
                <img src="https://i2.wp.com/metamedianews.com/wp-content/uploads/2016/05/wp-1463992679530.png" alt="">
              </div>
              <div class="column">
                <p>
                  Apenas hace un año desde que Skynet tomó conciencia de sí misma y comenzó la guerra contra las
                  máquinas. Hoy en día la humanidad ya no dispone de acceso a Internet y gran parte de toda la
                  información está inaccesible.
                </p>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p>
                  El día del salto de la reja está cada vez más cerca y la resistencia de Almonte acaba de desplegar una
                  red clandestina intentando recuperar la información de todas las hermandades rocieras. Ahora tan sólo
                  necesitan tener la aplicación a tiempo para registrar todas las hermandades que presentarán su
                  simpecado ante la virgen.
                  <strong>
                    El registro es indispensable porque se utilizará para decidir el orden en el que pasarán los
                  simpecados
                  </strong>
                </p>
              </div>
              <div class="column">
                <img
                  src="https://pre00.deviantart.net/d618/th/pre/i/2011/178/f/e/ermita_de_el_rocio_by_danielbenitezenrich-d3iytib.jpg"
                  alt="">
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  import hermandadesRegistradas from '../components/Hermandades-Registradas'

  export default {
    data() {
      return {
        mostrarTexto: false,
        titulo: 'leer'
      }
    },
    components: {
      hermandadesRegistradas
    },
    methods: {
      mostrar() {
        this.mostrarTexto = !this.mostrarTexto;


      }
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
    button
      width: 80%
      background-color: transparent
      color: green
      border: 2px solid green
      border-radius: 5px
      min-height: 50px
      text-transform: uppercase
      &:hover
        background-color: green
        color: white
        border-color: white
    #mostrarHistoria
        margin-bottom: 50px
</style>
