<template>
  <div id="app2">
    <div class="container">
        <div class="row">
          <div class="col-md-3 offset-md-2">
            <input id="input" v-model="cantidad" type="text" class="form-control my-5" placeholder="Ingresa el número">
            <select id="inputType" v-model="entradaAlmacenamiento" type="text" class="form-control my-5" placeholder="">
              <option v-for="(almacenamiento, index) of listaAlmacenamiento" :value="almacenamiento.id" :key="index">
                {{almacenamiento.nombre}}
              </option>
                          
            </select>
          </div>
          <div class="col-md-3 offset-md-2">
            <input id="result" v-model="resultado" type="text" class="form-control my-5" placeholder="Resultado">
            <select id="resultType" v-model="salidaAlmacenamiento" type="text" class="form-control my-5" placeholder="">
              <option v-for="(almacenamiento, index) of listaAlmacenamiento" :value="almacenamiento.id" :key="index">
                {{almacenamiento.nombre}}
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
  name: 'ConversorAlmacenamiento',
  data(){
    return{
      cantidad:0, 
      entradaAlmacenamiento: '', 
      salidaAlmacenamiento: '',
      resultado: 0,
      almacenamiento:{
        "b":{
          id:"b",
          index:0,
          nombre:"Bit",
          conversion:8
        },
        "B":{
          id:"B",
          index:1,
          nombre:"Byte",
          conversion:1024
        },
        "kB":{
          id:"kB",
          index:2,
          nombre:"Kilobyte",
          conversion:1024
        },
        "MB":{
          id:"MB",
          index:3,
          nombre:"Megabyte",
          conversion:1024
        },
        "GB":{
          id:"GB",
          index:4,
          nombre:"Gigabyte",
          conversion:1024
        },
        "TB":{
          id:"TB",
          index:5,
          nombre:"Terabyte",
          conversion:1024
        },
      }
    }
  },
  computed:{
    listaAlmacenamiento(){
      return Object.values(this.almacenamiento)
    },
  },
  methods:{
    calcular(){
      /* eslint-disable no-unreachable */

      const entrada = this.entradaAlmacenamiento
      const salida = this.salidaAlmacenamiento
      const data = this.almacenamiento
      const listData = this.listaAlmacenamiento

      if(entrada==salida){
        this.resultado=this.cantidad
        return
      }

      const entradaIndex = data[entrada].index
      const salidaIndex = data[salida].index

      let resul=0;
      if(entradaIndex > salidaIndex){
        //Vamos a ir multiplicando propiedad conversion desde entradaIndex-1 hasta salidaIndex
        resul=this.cantidad
        for(let x of this.range(entradaIndex,salidaIndex)){
          if(x===entradaIndex) continue
          console.log(`valor de resul antes: ${resul} y valor de x: ${x}`)
          resul*= listData[x].conversion
          console.log(`valor de resul despues: ${resul}`)
        }

      }else{
        //Vamos a ir dividiendo propiedad conversion desde entradaIndex+1 hasta salidaIndex
        resul=this.cantidad
        for(let x of this.range(entradaIndex,salidaIndex)){
          if(x===entradaIndex && entradaIndex!=0)
            continue
          if(x===salidaIndex && entradaIndex==0)
            continue
          console.log(`valor de resul antes: ${resul} y valor de x: ${x}`)
          resul/= listData[x].conversion
          console.log(`valor de resul despues: ${resul}`)
        }
      }
      this.resultado = resul
    },
    range(s,e){
      if(e > s)
        return Array(e - s + 1).fill(0).map((x, y) => y + s)
      else
        return Array(s - e + 1).fill(0).map((x, y) => - y + s);
    }
  }
}

</script>
<style>
</style>
