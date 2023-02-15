import React from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from '../shops/Home';
import Show from '../shops/Show';
import Cart from '../shops/Cart';

const Shop = () => {
        return (
            <div>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/show/*' element={<Show/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </div>
        );
}

export default Shop;
