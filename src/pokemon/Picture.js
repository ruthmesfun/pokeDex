import React from 'react';



const Picture = (props) => {
    return(
        <div onClick={() => props.OnClickElement}>
        <img src={props.image} width="100px" height="100px" alt="pikachu moving on pokeball"/>
        </div>
    );
}

export default Picture;