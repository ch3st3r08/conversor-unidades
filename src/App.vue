<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col sm="4">
          <b-list-group>
            <b-list-group-item to="/">Inicio</b-list-group-item>
            <b-list-group-item to="/conversormoneda">Conversor de Divizas</b-list-group-item>
            <b-list-group-item to="/conversortiempo">Conversor de Unidades de Tiempo</b-list-group-item>
            <b-list-group-item to="/conversormasa">Conversor de Unidades de Peso</b-list-group-item>
            <b-list-group-item to="/conversorlongitud">Conversor de Unidades de Longitud</b-list-group-item>
            <b-list-group-item to="/conversoralmacenamiento">Conversor de Unidades de Almacenamiento</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
