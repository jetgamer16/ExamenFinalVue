import { grupoRepository } from '@/repositories/gruposRepository'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('counter', {
  state() {
    return {
      grupos:[],
      grupoRepo: new grupoRepository(),
    }
  },
  getters:{
    getGrupoNameById: (state) => (id) => {
      const item = state.grupos.find((grupo) => grupo.id === id)
      return item?.nom
    },
  },
  actions:{
    async initialiceStore(){
      try{
      this.grupos = await this.grupoRepo.getAll()
    }catch(err){
      alert(err)
    }
    },
  }
})