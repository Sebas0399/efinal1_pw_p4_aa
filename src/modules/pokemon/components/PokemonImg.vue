<template>
    <div>
        <img v-if="mostrar" src="https://www.blacksquare.io/wp-content/uploads/2021/03/black-square.jpg" alt="No se puede mostrar">
        <img v-else :src="imagenFuente" alt="No se puede mostrar">
        <h1 v-if="mostrar">XXXXXXX</h1>
        <h1 v-else>{{pokemons.nombre}}</h1>
    </div>
</template>
<script>

export default{
    data(){
        arr:{}
    },
    methods:{
        
    },
    mounted() {
      
        
    },
    computed:{
        imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemons.id}.svg`;
    },
    },
    props:{
        pokemons:{
            name:Object,
            required:true
        },
        mostrar:{
            name:Object,
            required:true
        },
    }
}
</script>
<style scoped>
img{
    width: 200px;
    height: 250px;
    margin: 20px;
}
.con{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>