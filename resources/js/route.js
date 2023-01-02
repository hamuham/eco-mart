import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Example from './shops/Example';
import Home from './shops/Home';
// require('./shops/Example');

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={Example()} />
                <Route path='/Home' exact element={Home()} />
            </Routes>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
