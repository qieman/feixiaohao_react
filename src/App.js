import React, {Component} from 'react';
import './App.css';
import Index from './page/index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import createStore from './store'

const store = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route ex patch='/' component={Index}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
