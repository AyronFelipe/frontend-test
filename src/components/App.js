import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import DetailRestaurant from './DetailRestaurant'
import '../styles/style.css'

function App(){

    return(
        <div id="root">
            <Route exact path="/" component={Main} />
            <Route exact path="/detail" component={DetailRestaurant} />
        </div>
    )
}

export default App;
