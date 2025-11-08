import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example';
import { someUtilityFunction } from './utils/helper';

const App = () => {
    // You can use the utility function here if needed
    someUtilityFunction();

    return (
        <div>
            <h1>Welcome to My New Project</h1>
            <Example />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));