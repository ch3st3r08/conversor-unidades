<template>
  <div>
      <h1>Conversor de Unidades de Peso</h1>
      <ConversorMasa/>
  </div>
</template>
<script>
// @ is an alias to /src
import ConversorMasa from '@/components/ConversorMasa.vue'

export default {
  name: 'VistaConversorMasa',
  components: {
    ConversorMasa
  }
}
</script>