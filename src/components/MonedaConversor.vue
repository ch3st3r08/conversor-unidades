<template>
  <div class="container">
    <h1>Conversor de Moneda</h1>
    <!--COLUMNA IZQUIERDA PARA MONEDA ACTUAL-->
    <div class="row">
      <div class="col-md-3 offset-md-2">
        <label for="actual"></label>
        <select v-model="fromMoneda" class="form-control">
          <option disabled value="">Seleccione</option>
          <option v-for="(moneda, index) in listaMonedas" :key="index" :value="moneda.id">{{moneda.name}} ({{moneda.currencyId}})</option>
        </select>
      </div>
      <!--COLUMNA DERECHA PARA RESULTADO FINAL-->
      <div class="col-md-3 offset-md-2">
        <label for="final"></label>
        <select v-model="toMoneda" class="form-control">
          <option disabled value="">Seleccione</option>
          <option v-for="(moneda, index) in listaMonedas" :key="index" :value="moneda.id">{{moneda.name}} ({{moneda.currencyId}})</option>
        </select> 
      </div>
    </div>

    <!--input para recibir cantidad a convertir-->
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <input v-model="cantidad" type="number" class="form-control my-5" placeholder="Ingresar la cantidad para convertir">
      </div>
    </div>
    <!--Botón Convertir-->
    <div class="row">
      <div class="col-md-12 text-center">
        <button @click="hacerConversion" class="btn btn-primary btn-block">Convertir</button>
      </div>   
    </div>
    <!--Resultado-->
    <div class="row mt-5">
      <div class="col-sm-12 text-center">
        <h1 class="alert" :class="{'alert-success': (!!resultado.trim())}">{{resultado}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import countryCurrencyList from "../assets/country-codes.json"

export default {
  name: 'MonedaConversor',
  data(){
    return{
      monedas: countryCurrencyList,
      cantidad:null,
      fromMoneda:'',
      toMoneda:'',
      resultado: ''
    }
  },
  created(){
  },
  methods: {
    hacerConversion(){
      const apiKey="4e9f21919bfa9b27d11b"
      const fromCountryCurr = this.monedas[this.fromMoneda].currencyId
      const toCountryCurr = this.monedas[this.toMoneda].currencyId
      const url=`https://free.currconv.com/api/v7/convert?q=${fromCountryCurr}_${toCountryCurr},${toCountryCurr}_${fromCountryCurr}&compact=ultra&apiKey=${apiKey}`
      console.log(url)
      fetch(url)
      .then(response=>response.json())
      .then(data=>this.procesarData(data))
    },
    test(){
      console.log(this.listaMonedas)
    },
    procesarData(data){
      const fromCountryCurr = this.monedas[this.fromMoneda].currencyId
      const toCountryCurr = this.monedas[this.toMoneda].currencyId
      const toCountryCurrSymbol = this.monedas[this.toMoneda].currencySymbol

      const conversionNormal = `${fromCountryCurr}_${toCountryCurr}`
      //const conversionReves = `${this.toMoneda}_${this.fromMoneda}`
      this.resultado = `${this.cantidad * data[conversionNormal]} ${toCountryCurrSymbol}`
    }
  },
  computed: {
    listaMonedas(){
      return Object.values(this.monedas)
    }
  }
}
</script>
<style scoped>
.arow {
  border-style:solid;
  border-color:red;
}
</style>
