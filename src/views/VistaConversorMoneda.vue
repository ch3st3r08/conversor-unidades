<template>
  <div>
      <h1>Conversor de Divizas</h1>
      <MonedaConversor/>
  </div>
</template>
<script>
// @ is an alias to /src
import MonedaConversor from '@/components/MonedaConversor.vue'

export default {
  name: 'VistaConversorMoneda',
  components: {
    MonedaConversor
  }
}
</script>