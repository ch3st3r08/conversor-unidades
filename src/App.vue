<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Integrantes</h1>
    <ul>
      <li>Néstor Wilfredo Chávez Ramírez</li>
      <li>David Alexis Gallegos Gonzales</li>
    </ul>
    <hr>
    <hr>
    <MonedaConversor/>
    <hr>
    <ConversorLongitud/>
    <hr>
    <ConversorMasa/>
    <hr>
    <ConversorTiempo/>
  </div>
</template>

<script>
import MonedaConversor from './components/MonedaConversor.vue'
import ConversorMasa from './components/ConversorMasa.vue'
import ConversorLongitud from './components/ConversorLongitud.vue'
import ConversorTiempo from './components/ConversorTiempo.vue'

export default {
  name: 'App',
  components: {
    MonedaConversor,
    ConversorMasa,
    ConversorTiempo,
    ConversorLongitud
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
