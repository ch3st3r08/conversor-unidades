<template>
  <div>
      <h1>Conversor de Unidades de Almacenamiento</h1>
      <ConversorAlmacenamiento/>
  </div>
</template>
<script>
// @ is an alias to /src
import ConversorAlmacenamiento from '@/components/ConversorAlmacenamiento.vue'

export default {
  name: 'VistaConversorAlmacenamiento',
  components: {
    ConversorAlmacenamiento
  }
}
</script>
