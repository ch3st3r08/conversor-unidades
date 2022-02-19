<template>
  <div id="app">
    <div class="container">
        <div class="row">
          <div class="col-md-3 offset-md-2">
            <input id="input" v-model="cantidad" type="number" class="form-control my-5" placeholder="Ingresa el número">
            <select id="inputType" v-model="entradaTime" type="text" class="form-control my-5" placeholder="">
              <option v-for="(Time, index) of listaTime" :value="Time.id" :key="index">
                {{Time.nombre}}
              </option>
                          
            </select>
          </div>
          <div class="col-md-3 offset-md-2">
            <input id="result" v-model="resultado" type="text" class="form-control my-5" placeholder="Resultado" readonly>
            <select id="resultType" v-model="salidaTime" type="text" class="form-control my-5" placeholder="">
              <option v-for="(Time, index) of listaTime" :value="Time.id" :key="index">
                {{Time.nombre}}
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
  name: 'ConversorTiempo',
  data(){
    return{
      cantidad:0, 
      entradaTime: '', 
      salidaTime: '',
      resultado: 0,
      Time:{
        's': {
          nombre: 'Segundos', 
          id: 's',
          tCambio: {
            'ms':1000,
            'min': 0.0166666667, 
            'hour':0.0002777778,
            'day': 0.0000115741,
            'week':0.0000016534 ,
            'mes':3.802570537710023,
            'año':3.16880878149808787823110000,
          }
        },
        'ms': {
          nombre: 'Milisegundo',
          id:'ms',
          tCambio: {
            's':0.001,
            'min':0.0000166667,
            'hour':2.77777777782109998,
            'day':1.157407407400098887,
            'week':1.65343910820121000,
            'mes':3.8025705377000000,
            'año':3.168808781416,
          }
        },
        'min':{
          nombre: 'Minutos',
          id: 'min',
          tCambio: {
            's':60,
            'ms':60000,
            'hour':0.0166666667,
            'day':0.0006944444,
            'week':0.0000992063,
            'mes':0.0000228154,
            'año':0.0000019013,
          }
        },
        'hour':{
          nombre: 'Horas',
          id: 'hour',
          tCambio: {
            'ms':3600000,
            's':3600,
            'min':60,
            'day':0.0416666667,
            'week': 0.0059523808,
            'mes':0.0013689254,
            'año':0.0001140771,
          }
        },
        'day':{
          nombre: 'Días',
          id: 'day',
          tCambio: {
            'ms':86400000,
            's':86400,
            'min':1440,
            'week':0.1428571389,
            'mes':0.0328542094,
            'año':0.0027378508,
          }
        }
      },
        'week':{
          nombre: 'Semanas',
          id: 'week',
          tCambio: {
            'ms':6.0480001656,
            's':6.0480001656,
            'min':1.0080000276,
            'hour':1.680000046,
            'day':7.0000001916,
            'mes':0.2299794724,
            'año':0.019164956,
          }
        },
        'mes':{
          nombre: 'Meses',
          id: 'mes',
          tCambio: {
            'ms':2629800000,
            's':2629800,
            'min':43830,
            'hour':730.5,
            'day':30.4375,
            'week':4.3482141667,
            'año':0.0833333333,
          }
        },
        'año':{
          nombre: 'Años',
          id: 'año',
          tCambio: {
            'ms':31557600000,
            's':31557600,
            'min':525960,
            'hour':8766,
            'day':365.25,
            'week':52.17857,
            'mes':12,
          }
        }

    }
        
  },
  computed:{
    listaTime(){
      return Object.values(this.Time)
    }
  },
  methods:{
    calcular(){
      console.log(`MedidaEntrada = ${this.entradaTime}, salidaTime = ${this.salidaTime}`)
      console.log(`cantidad = ${this.cantidad}`)
      const k = this.entradaTime
      const v = this.salidaTime
      const c = this.cantidad

      let resul
      if(k==v)
        resul=c
      else 
        resul = c * this.Time[k].tCambio[v]
      this.resultado=resul
    }
  }
}
</script>
<style></style>