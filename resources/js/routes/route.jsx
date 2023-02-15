import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Shop from './Shop';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route exact path='*' element={<Shop/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
