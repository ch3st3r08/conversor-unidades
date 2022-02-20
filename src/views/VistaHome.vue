<template>
  <div>
        <img alt="converter logo" src="../assets/conversor.png">
    <ul>
        <b-dropdown id="dropright" dropright text="Integrantes" variant="primary" class="m-3">
          <b-dropdown-item href="#">David Alexis Gallegos González</b-dropdown-item>
          <b-dropdown-item href="#">Nestor Wilfredo Chavez Ramirez</b-dropdown-item>
        </b-dropdown>
    </ul>
  </div>
</template>
<script>


export default {
  name: 'VistaHome',
  components: {
  }
}
</script>
<style scoped>
  img{
    width:45%;
    height:45%;
  }
</style>
