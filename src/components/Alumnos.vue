<template>
    <h1 v-if="id>0">Alumnos de : {{ group?.nom }}</h1> 
    <h1 v-else >Alumnos sin Matricular</h1>
     <table>
       <thead>
         <tr>
           <th>id</th>
           <th>NIA</th>
           <th>nom</th>
           <th v-if="id>0">Grupo</th>
           <th>Acciones</th>
         </tr>
       </thead>
       <tbody>
       <tr v-for="alumn in alumns">
         <td> {{ alumn.id }} </td>
         <td> {{ alumn.nia }} </td>
         <td> {{ alumn.nom }} </td>
         <td v-if="alumn.grup>0"> {{ getGrupName(alumn.grup) }}</td>
         <td><button @click="matricular(alumn)">Matricular</button>|<button v-if="alumn.grup>0" @click="desmatricular(alumn)">Desatricular</button></td>
       </tr>
     </tbody>
     </table>
</template>
<script>
import { alumnoRepository } from '@/repositories/alumnosRepository';
import { useDataStore } from '@/stores/store'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      alumns:[],
      group:{},
      alumnRepo: new alumnoRepository() 
    }
  },
  mounted(){
    this.initialiceAlumns()
  },
  computed:{
    ...mapState(useDataStore,['getGrupoNameById','grupos'])
  },
  watch:{
    id() {
      this.initialiceAlumns()
    }
  },
  props: {
      id: {
      type: String,
      required: false
    }
  },
  methods:{
    async initialiceAlumns(){
      this.group = this.getGroup(this.id)
      this.alumns = await this.alumnRepo.getAlumnosByGroup(this.id)
    },
    matricular(alumn){
      this.$router.push("/altas/"+alumn.id)
    },
    async desmatricular(alumn){
      if(confirm('Estas seguro de desmatricular a '+ alumn.nom + "Del grupo "+ this.getGrupName(alumn.grup))){
        try{
          await this.alumnRepo.changeAlumnGroup(alumn.id,0)
          const index = this.alumns.findIndex(value => value == alumn)
          this.alumns?.splice(index,1)
        }catch(err){

        }
      }
    },
    getGroup(id){
      return this.grupos.find( value => value.id == id)
    },
    getGrupName(grupId){
      return this.getGrupoNameById(grupId)
    }
    
  }
  
}
</script>