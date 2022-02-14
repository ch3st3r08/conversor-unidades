<template>
  <div id="app2">
    <div class="container">
      <h1 class="text-center">Conversor De Medidas De Longitud</h1>
        <div class="row">
          <div class="col-md-3 offset-md-2">
            <input id="input" v-model="cantidad" type="text" class="form-control my-5" placeholder="Ingresa el número">
            <select id="inputType" v-model="entradaLongitud" type="text" class="form-control my-5" placeholder="">
              <option v-for="(longitud, index) of listaLongitud" :value="longitud.id" :key="index">
                {{longitud.nombre}}
              </option>
                          
            </select>
          </div>
          <div class="col-md-3 offset-md-2">
            <input id="result" v-model="resultado" type="text" class="form-control my-5" placeholder="Resultado">
            <select id="resultType" v-model="salidaLongitud" type="text" class="form-control my-5" placeholder="">
              <option v-for="(longitud, index) of listaLongitud" :value="longitud.id" :key="index">
                {{longitud.nombre}}
              </option>
            </select>
          </div>
        </div>
            <!--Botón Convertir-->
        <div class="row">
          <div class="col-md-12 text-center">
            <button class="btn btn-primary" @click="calcular">convertir</button>
          </div>   
        </div>
            <!--Resultado-->
        <div class="row mt-5">
          <div class="col-sm-12 text-center">
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'ConversorLongitud',
  data(){
    return{
      cantidad:0, 
      entradaLongitud: '', 
      salidaLongitud: '',
      resultado: 0,
      longitudes:{
        'cm': {
          nombre: 'Centímetros', 
          id: 'cm',
          tCambio: {
            'm': 0.01, 
            'km': 0.00001,
            'in': 0.3937,
          }
        },
        'm': {
          nombre: 'Metros',
          id:'m',
          tCambio: {
            'cm':100,
            'km': 1000,
            'in':39.37,
          }
        },
        'km':{
          nombre: 'Kilómetro',
          id: 'km',
          tCambio: {
            'cm':100000,
            'm':1000,
            'in':39370.0787,
          }
        },
        'in':{
          nombre: 'Pulgadas',
          id: 'in',
          tCambio: {
            'cm':2.54,
            'm':0.0254,
            'km':0.0000254,
          }
        }  
      }
    }
  },
  computed:{
    listaLongitud(){
      return Object.values(this.longitudes)
    }
  },
  methods:{
    calcular(){
      console.log(`LongitudEntrada = ${this.entradaLongitud}, salidaLongitud = ${this.salidaLongitud}`)
      console.log(`cantidad = ${this.cantidad}`)
      const k = this.entradaLongitud
      const v = this.salidaLongitud
      const c = this.cantidad
      const resul = c * this.longitudes[k].tCambio[v]
      this.resultado=resul
    }
  }
}

</script>
<style>
</style>