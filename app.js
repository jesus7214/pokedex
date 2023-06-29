const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemon = document.getElementById("pokeName");
const buttonSearchh = document.getElementById("searchPokemon");
const appNode = document.getElementById("app");
const removePokemon= document.getElementById('borrarPokemon')

buttonSearchh.addEventListener("click", insertarPokemon); // esta funcion: insertarPokemon() VA SIN PARENTESIS poruq está dentro de un evento addeventlitsener
removePokemon.addEventListener("click",borrarPokemon ) // esta funcion: borrarPokemon() VA SIN PARENTESIS poruq está dentro de un evento addeventlitsener

function insertarPokemon() {
  window
    .fetch(`${url}${pokemon.value.toLowerCase()}`)
    .then( res => res.json())
    .then(data => {
      const allItems = [];
      const result = [];

      for (let pokemonInfo in data) {
        result.push([pokemonInfo, data[pokemonInfo]]);
      }
      console.table(result)

      const pokeImagen= document.createElement('img')
      pokeImagen.src= result[14][1].front_default
     

      const pokemonName = document.createElement('h3')
      pokemonName.innerHTML= `Name: ${result[10][1]} <br> id: ${result[6][1]}`
      pokemonName.classList.add('pokemon-name'); // se crea la clase para darle estilo en css, porque como se creó **pokemonName = document.createElement** no existe en HTML

      const pokemonType = document.createElement('h3')
      pokemonType.innerText= `Type: ${result[16][1][0].type.name}`
      pokemonType.classList.add('pokemonType');

      const contenedor= document.createElement('div')
      contenedor.append(pokeImagen,pokemonName,pokemonType)

      allItems.push(contenedor)
      appNode.append(...allItems)
    });
}

function borrarPokemon(){
let allPokemoss= appNode.childNodes
 allPokemoss = Array.from(allPokemoss)// el from es para crear objetos iterables y asi recorrerlos mediante forEach

 allPokemoss.forEach(pokemon => {
  pokemon.remove(pokemon)
 })
}
