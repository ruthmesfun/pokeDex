import React from 'react';

const Info = (props) => {
    return(
        <div>
            <div>
                <h2>description:</h2>
                <p> {props.info.description}</p>
            </div>

        </div>
    );
}

export default Info;