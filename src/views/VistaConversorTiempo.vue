<template>
  <div>
      <h1>Conversor de Tiempo</h1>
      <ConversorTiempo/>
  </div>
</template>
<script>
// @ is an alias to /src
import ConversorTiempo from '@/components/ConversorTiempo.vue'

export default {
  name: 'VistaConversorTiempo',
  components: {
    ConversorTiempo
  }
}
</script>