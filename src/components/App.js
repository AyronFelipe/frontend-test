import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import DetailRestaurant from './DetailRestaurant'
import '../styles/style.css'

function App(){

    return(
        <div id="root">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/detail/:id/" component={DetailRestaurant} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
