import React from 'react';
import Picture from './Picture';
import Info from './Info'

class Pokemon extends React.Component {
    render(){

        return(
            <div id="pokemonContainer">
                    <h1> {this.props.current_pokemon.name}</h1>

                    <div >
                        <Picture image={this.props.currentImage} onClickElement = {this.props.onClickElement}/>
                    </div>

                    <div>
                        <Info info={""} />
                    </div>
            </div>
        )
    }
};

export default Pokemon;