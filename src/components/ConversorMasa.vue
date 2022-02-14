<template>
  <div id="app">
    <div class="container">
      <h1 class="text-center">Conversor De Medidas De Masa</h1>
        <div class="row">
          <div class="col-md-3 offset-md-2">
            <input id="input" v-model="cantidad" type="number" class="form-control my-5" placeholder="Ingresa el número">
            <select id="inputType" v-model="entradaMasa" type="text" class="form-control my-5" placeholder="">
              <option v-for="(Masa, index) of listaMasa" :value="Masa.id" :key="index">
                {{Masa.nombre}}
              </option>
                          
            </select>
          </div>
          <div class="col-md-3 offset-md-2">
            <input id="result" v-model="resultado" type="text" class="form-control my-5" placeholder="Resultado" readonly>
            <select id="resultType" v-model="salidaMasa" type="text" class="form-control my-5" placeholder="">
              <option v-for="(Masa, index) of listaMasa" :value="Masa.id" :key="index">
                {{Masa.nombre}}
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
  name: 'ConversorMasa',
  data(){
    return{
      cantidad:0, 
      entradaMasa: '', 
      salidaMasa: '',
      resultado: 0,
      Masa:{
        'g': {
          nombre: 'Gramo', 
          id: 'g',
          tCambio: {
            'kg': 0.01, 
            'mg': 1000,
            'kN': 9.81,
            't':0.000001,
            'h':0.01,
            'lb':0.0022046226,
          }
        },
        'kg': {
          nombre: 'Kilogramo',
          id:'kg',
          tCambio: {
            'g':1000,
            'mg':1000000,
            'kN':0.001,
            't':0.001,
            'h':10,
            'lb':2.2046226218,
          }
        },
        'lb':{
          nombre: 'Libra',
          id: 'lb',
          tCambio: {
            'g':453.59237,
            'mg':4.53592370000,
            'kN':0.0044482225,
            't':0.0004535924,
            'h':4.5359237,
            'kg':0.45359237,
          }
        },
        'mg':{
          nombre: 'Miligramo',
          id: 'mg',
          tCambio: {
            'g':0.001,
            'kN':9.806652,
            'kg':0.000001,
            't':9.842065276100000000,
            'h': 0.00001,
            'lb':0.0000022046,
          }
        },
        't':{
          nombre: 'Toneladas',
          id: 't',
          tCambio: {
            'g':1000000,
            'kN':9.806652,
            'kg':1000,
            'lb':2.20462262180000000,
            'h': 10000,
          }
        }
      }
    }
  },
  computed:{
    listaMasa(){
      return Object.values(this.Masa)
    }
  },
  methods:{
    calcular(){
      console.log(`MedidaEntrada = ${this.entradaMasa}, salidaMasa = ${this.salidaMasa}`)
      console.log(`cantidad = ${this.cantidad}`)
      const k = this.entradaMasa
      const v = this.salidaMasa
      const c = this.cantidad

      let resul
      if(k==v)
        resul=c
      else 
        resul = c * this.Masa[k].tCambio[v]
      this.resultado=resul
    }
  }
}
</script>
<style></style>