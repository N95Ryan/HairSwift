import React from 'react';
import { useHistory } from 'react-router-dom';

function Button() {
    const history = useHistory();

    const handleClick = () => {
        // Rediriger l'utilisateur vers la page Login.js
        history.push('/Login');
    };

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default Button;
