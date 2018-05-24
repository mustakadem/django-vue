<template>
  <div class="container">
    <div class="column  is-offset-one-fifth">

      <table class="table list-group" v-sortable>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email Responsable</th>
          <th>Fecha de creacion</th>
          <th>Posicion</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="hermandad in hermandades" class="list-group-item">
          <td>{{hermandad.id}}</td>
          <td>{{hermandad.nombre}}</td>
          <td>{{hermandad.email_responsable}}</td>
          <td>{{hermandad.fecha_creacion}}</td>
          <td></td>
          <td></td>
          <td><a @click.prevent="editarHermandad(hermandad)" class="button is-success"><i
            class="far fa-edit"></i></a></td>
          <td><a class="button is-danger" @click.prevent="eliminarHermandad(hermandad.id)"><i
            class="fas fa-trash-alt"></i></a></td>

        </tr>
        </tbody>
      </table>
    </div>
    <form method="post" @submit.prevent="actualizarHermandad(hermandadModal.id)">
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Estas editando la Hermandad <strong>{{hermandadModal.nombre}}</strong></p>
          </header>
          <section class="modal-card-body">
            <div class="field">
              <label class="label">Nombre</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" name="nombre" id="nombre" v-model="hermandadModal.nombre"
                       placeholder="Nombre de la hermandad">

                <span class="icon is-small is-left"><i class="fas fa-people-carry"></i></span>

                <span v-if="errores.nombre" class="icon is-small is-right"><i
                  class="fas fa-exclamation-triangle"></i></span>
                <span v-else class="icon is-small is-right"><i class="fas fa-check"></i></span>

              </div>
              <div v-for="error in errores.nombre">
                <p class="help is-danger">{{error}}</p>
              </div>
            </div>

            <div class="field">

              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input" type="email" name="email_responsable" id="email_responsable"
                       v-model="hermandadModal.email_responsable"
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
                       v-model="hermandadModal.fecha_creacion">
              </div>

              <div v-for="error in errores.fecha_creacion">
                <p class="help is-danger">{{error}}</p>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Actualizar</button>
            <button class="button is-info cerrar">Cerrar</button>
          </footer>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
  import hermandadesApi from '../services/hermandadesApi';
  import axios from 'axios'

  axios.defaults.xsrfHeaderName = "X-CSRFToken";


  export default {
    name: "Admin-Panel",
    created() {
      this.listaHermandades();
    },
    data() {
      return {
        hermandades: {},
        hermandadModal: {'id': '', 'nombre': '', 'email_responsable': '', 'fecha_creacion': ''},
        errores:[]
      }
    },
    methods: {
      listaHermandades() {
        return hermandadesApi.getListHermandades().then(data => {
          this.hermandades = data;
        });
      },
      eliminarHermandad(id) {
        axios.delete('/hermandades/' + id + '/').then(response => {
          this.listaHermandades();
          toastr.warning('Eliminado correctamente')
        });
      },
      editarHermandad(hermandad) {

        this.hermandadModal.id = hermandad.id;
        this.hermandadModal.nombre = hermandad.nombre;
        this.hermandadModal.email_responsable = hermandad.email_responsable;
        this.hermandadModal.fecha_creacion = hermandad.fecha_creacion;


        $(".modal").addClass("is-active");
        $(".cerrar").click(function () {
          $(".modal").removeClass("is-active");
        });


      },
      actualizarHermandad(id){
        axios.put('/hermandades/'+id+'/',this.hermandadModal).then(response => {
          this.listaHermandades();
          this.hermandadModal = {'id': '', 'nombre': '', 'email_responsable': '', 'fecha_creacion': ''};
          this.errores = [];
          $(".modal").removeClass("is-active");
          toastr.success('La hermandad se ha actualizado correctamente');
        }).catch(error => {
          this.errores = error.response.data;
        });
      }
    }
  }
</script>

<style scoped lang="sass">
  .container
    padding-top: 30px
    padding-bottom: 30px
</style>
