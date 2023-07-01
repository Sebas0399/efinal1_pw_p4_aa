<template>
    <div v-if="general">
        <div>
    <h1>Puntaje: {{ puntaje }}</h1>
    <h1>Intento: {{ intento }}</h1>
  </div>
  <div class="container-game">
    <PokemonImg v-for="a in arr" :pokemons="a" :mostrar="mostrar" />
  </div>
  <div>
    <button v-on:click="jugar">Jugar</button>
  </div>
    </div>
  

  <div v-if="gano" class="gano">
    <h1>Puntaje: {{ puntaje }}</h1>
    <h1>Felicitaciones has ganado un premio de $10.000,00</h1>
    <button v-on:click="reinciar">Nuevo Juego</button>
  </div>
  <div v-if="perdio" class="perdio">
    <h1>Has utilizado tus 5 intentos</h1>
    <h1>El juego ha termindo, intentalo nuevamente</h1>
    <button v-on:click="reinciar">Nuevo Juego</button>
  </div>
</template>
<script>
import pokemonClient from "../helpers/PokemonClient";
import PokemonImg from "../components/PokemonImg.vue";
export default {
  data() {
    return {
      arr: [],
      repetidos: [],
      mostrar: true,
      puntaje: 0,
      intento: 0,
      gano: false,
      perdio: false,
      general:true
    };
  },
  methods: {
    async cargaInicial() {
      this.arr = await pokemonClient();
    },
    async jugar() {
      this.arr = await pokemonClient();
      this.mostrar = false;
      this.intento++;
      this.repetidos = [];
      this.arr.forEach((element) => {
        if (this.repetidos.indexOf(element.id) == -1) {
          this.repetidos.push(element.id);
        }
      });
      if (this.repetidos.length == 2) {
        this.puntaje = this.puntaje + 2;
      } else if (this.repetidos.length == 1) {
        this.puntaje = this.puntaje + 5;
      }
      if (this.intento == 5 && this.puntaje < 10) {
        this.perdio = true;
        this.general=false
      } else if (this.intento == 5 && this.puntaje >= 10) {
        this.gano = true;
        this.general=false

      }
    },
    reinciar() {
    this.mostrar= true
    this.puntaje= 0
    this.intento= 0
    this.gano= false
    this.perdio= false
    this.general=true
  }
  },
  
  components: {
    PokemonImg,
  },
  mounted() {
    this.cargaInicial();
  },
};
</script>
<style scoped>
.container-game {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.gano h1{
    color: blue;

}
.perdio h1{
    color: red;
   

}
</style>
