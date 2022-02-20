<template>
  <div>
      <h1>Conversor de Unidades de Longitud</h1>
      <ConversorLongitud/>
  </div>
</template>
<script>
// @ is an alias to /src
import ConversorLongitud from '@/components/ConversorLongitud.vue'

export default {
  name: 'VistaConversorLongitud',
  components: {
    ConversorLongitud
  }
}
</script>