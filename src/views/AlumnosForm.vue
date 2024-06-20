<template>
    <div class="row">
        <form class="form" @submit.prevent="addEditAlumn(alumn)" novalidate>
          <fieldset>
            <legend>Editar o Añadir alumno</legend>
            <div v-if="edit" :disabled="alumn.id" class="form-group">
              <label>ID:</label>
              <input v-model="alumn.id" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>NIA:</label>
              <input v-model="alumn.nia" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Nombre:</label>
              <input v-model="alumn.nom" type="text" class="form-control" />
            </div>
            <div v-if="edit" class="form-group">
              <label>Grupo:</label>
              <select v-model="alumn.grup" class="form-control">
                <option :value="0">--- Sin Grupo ---</option>
                <option v-for="grupo in grupos" :value="grupo.id">{{grupo.nom}}</option>
              </select>
            </div>

  
            <button type="submit" class="btn btn-default btn-primary">Guardar</button>
            <button :hidden="!edit" @click="goToList()" type="button"class="btn btn-danger">
          Cancelar
        </button>
          </fieldset>
        </form>
    </div>
  </template>
  <script>
  import { alumnoRepository } from '@/repositories/alumnosRepository';
import { useDataStore } from '@/stores/store';
  import { mapState } from 'pinia';
  export default {
    data(){
      return{
        edit:false,
        alumn:{grup:0},
        alumnRepo: new alumnoRepository()
      }
    },
    computed: {
      ...mapState(useDataStore,['grupos'] )
    },
    async mounted(){
      if(this.$route.params.id){
        this.alumn = await this.alumnRepo.getAlumnosById(this.$route.params.id) 
        this.edit=true
      }
    },
    methods:{
      async addEditAlumn(alumn){
        if(this.edit && this.alumn.grup==0){
            alert("El alumno debe matricularse en un grupo ")
            return;
        }
            await this.alumnRepo.editAlumnos(alumn)
            this.$router.push("/alumnos/"+alumn.grup)
        if(!this.edit){
            try{
                await this.alumnRepo.addAlumnos(alumn)
                this.alumn.nia=""
                this.alumn.nom=""
            }catch(err){
                alert(err)
            }
        }
      },
      goToList(){
        this.$router.push("/")
      }
    }
}
</script>