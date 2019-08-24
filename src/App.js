import React from "react";
import Pokemon from "./pokemon/Pokemon";
import "./App.css";

const Pokedex = require("pokedex-promise-v2");

class App extends React.Component {
  state = {
    current_pokemon: {
      name: "",
      images: {},
      info: {
        height: "",
        abilities: [],
        weight: "",
        type: ""
      },
      evolutions: []
    },

    currentImage: ""
  };

  componentDidMount() {
    const P = new Pokedex();
    P.getPokemonByName("pikachu").then(response => {
      console.log(response);
      this.setState(state => {
        return {
          current_pokemon: {
            name: response.name,
            images: response.sprites,
            info: {
              height: response.height,
              abilities: response.abilities,
              weight: response.weight,
              type: response.types[0].type.name
            }
          },
          currentImage: response.sprites.front_default
        };
      });
    });
  }

  onClickSwitchImage = () => {
    const pokemonImages = [
      this.current_pokemon.images.front_default,
      this.current_pokemon.images.back_default
    ];

    if (this.state.currentImage === pokemonImages[0]) {
      return this.setState({
        currentImage: pokemonImages[1]
      });
    } else {
      return this.setState({
        currentImage: pokemonImages[0]
      });
    }
  };

  changePokemonOnClick = () => {
    const numPokemon = this.state.list_pokemon.length;
    const i = Math.floor(Math.random() * Math.floor(numPokemon));
    const choosePokemon = this.state.list_pokemon[i];

    // This is where we change the pokemon

    this.setState({
      current_pokemon: {
        name: choosePokemon.name,
        images: choosePokemon.images
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Pokemon current_pokemon={this.state.current_pokemon}  currentImage={this.state.currentImage} onClickElement = {this.onClickSwitchImage}/>
      </div>
    );
  }
}

export default App;
