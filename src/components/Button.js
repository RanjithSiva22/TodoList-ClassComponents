import React from 'react';

function Button({ event, name }) {
    return (
        <button onClick={event}>{name}</button>
    );
}

export default Button;