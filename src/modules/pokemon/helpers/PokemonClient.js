const obtenerApi = async (id) => {
  const datos = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(
    (data) => data.json()
  );
  return datos;
};
async function obtenerVectorPokemons() {
  var arr = [];
  var nums = obtenerNumerosAleatorios(5, 10);

  for (let index = 0; index < 3; index++) {
    var data = await obtenerApi(nums[index]);
    var obj={
        nombre:data.name,
        id:data.id
    }
    arr.push(obj);
  }
  return arr;
}
function obtenerNumerosAleatorios(min, max) {
  var arr = [];
  for (let index = 0; index < 3; index++) {
    arr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return arr;
}
export default obtenerVectorPokemons;
