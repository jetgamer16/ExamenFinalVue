<script>
import { mapActions } from 'pinia';
import { useDataStore } from '@/stores/store.js'

export default {
  data() {
    return {
  
    }
  },
  async mounted(){
    await this.initialiceStore()
  },
  methods:{
    ...mapActions(useDataStore,['initialiceStore'])
  }
}
</script>

<template>
  <header>


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/alumnos/0">Alumnos no Matriculados</RouterLink>
        <RouterLink to="/altas">Alta de Alumnos</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
  <footer>
    Jose Enrique pardo @copy
  </footer>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css');
</style>
