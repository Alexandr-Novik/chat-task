import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";



//Imports
import Header from './Header/Header';
import Person from './Person/Person';
import Manager from './Manager/Manager';

class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>

                <Header />

                <div>
                    <Route exact path="/" component={Person}/>
                    <Route exact path="/manager" component={Manager}/>
                </div>

            </BrowserRouter>
        )
    }
}

export default Index;