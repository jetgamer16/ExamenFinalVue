<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">
      <h1 class="text-center">Listado de grupos</h1>
      <table class="table table-striped table-hover">
        <thead class="thead-dark bg-primary">
          <tr>
            <th>Id</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Ciclo</th>
            <th>Grado</th>
            <th>Familia</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="grupo in grupos" :key="grupo.id" :grupo="grupo">
            <td>{{ grupo.id }}</td>
            <td>{{ grupo.codi }}</td>
            <td>{{ grupo.nom }}</td>
            <td>{{ grupo.cicle }}</td>
            <td>{{ grupo.grau }}</td>
            <td>{{ grupo.familia }}</td>
            <td>
              <button @click="mostrarAlumnos(grupo.id)"
                class="btn btn-secondary"
                title="Ver alumnos"
              >
              <i class="bi bi-people"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useDataStore } from '@/stores/store';
import { mapState } from 'pinia';

export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapState(useDataStore,['grupos'])
  },
  methods:{
    mostrarAlumnos(id){
      this.$router.push("/alumnos/"+id)
    },
  }
};
</script>