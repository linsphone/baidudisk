<template>
  <div class="app">
    <v-layout>
      <v-header  slot="header"></v-header>
      <router-view />
    </v-layout>
  </div>
</template>

<script>

import  VLayout from '@/components/Layout'
import  VHeader from '@/components/Header'

export default {
  name: 'app',
  components:{
    VLayout,
    VHeader
  }
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  min-width: 900px;
  min-height: 650px;
}
</style>
