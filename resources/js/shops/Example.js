import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Reactだぞ</div>

                        <Button color="secondary" variant="contained" href={`/Home`}>Homeに遷移ボタン</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
