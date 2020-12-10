import React from 'react';
import ReactDOM from 'react-dom';



//Imports
import Index from './Index';

class App extends React.Component {
    render() {
        return (
            <Index />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));