<template>
  <div id="app">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/conversormoneda">Conversor de Divizas</router-link>
          <router-link to="/conversortiempo">Conversor de Unidades de Tiempo</router-link>
          <router-link to="/conversormasa">Conversor de Unidades de Peso</router-link>
          <router-link to="/conversorlongitud">Conversor de Unidades de Longitud</router-link>
        </b-navbar-nav>
      </b-navbar>
    <router-view/>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
