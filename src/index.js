// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component (function based)
const App = () => {
    const buttonText = { text:'Click Me!' };
    const style = { backgroundColor:'blue', color:'white' };
    const labelText = 'Enter name: ';

    return (
        <div>
            <label className="lab" htmlFor = "name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style ={style}>
                {buttonText.text}
            </button>
        </div>
        );
};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
