const url = "https://pokeapi.co/api/v2/pokemon/";
const pokemon = document.getElementById("pokeName");
const buttonSearch = document.getElementById("searchPokemon");
const appNode = document.getElementById("app");
const removePokemon = document.getElementById('borrarPokemon');

buttonSearch.addEventListener("click", insertarPokemon);
removePokemon.addEventListener("click", borrarPokemon);

function insertarPokemon() {
  // Clear the previous Pokémon data before adding a new one
  appNode.innerHTML = '';

  const pokemonName = pokemon.value.toLowerCase();
  
  if (pokemonName) {
    fetch(`${url}${pokemonName}`)
      .then(res => res.json())
      .then(data => {
        const pokeImagen = document.createElement('img');
        pokeImagen.src = data.sprites.front_default;

        const pokemonNameElement = document.createElement('h3');
        pokemonNameElement.innerHTML = `Name: ${data.name} <br> id: ${data.id}`;
        pokemonNameElement.classList.add('pokemon-name');

        const types = data.types.map(type => type.type.name);
        const pokemonType = document.createElement('h3');
        pokemonType.innerText = `Type: ${types.join(', ')}`;
        pokemonType.classList.add('pokemonType');

        const container = document.createElement('div');
        container.append(pokeImagen, pokemonNameElement, pokemonType);

        appNode.appendChild(container);
      })
      .catch(error => {
        console.error('Error fetching Pokémon data:', error);
      });
  } else {
    alert('Please enter a Pokémon name or ID.');
  }
}

function borrarPokemon() {
  appNode.innerHTML = ''; // Clear all Pokémon data from the appNode
}
