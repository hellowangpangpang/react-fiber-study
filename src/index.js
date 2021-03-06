import React from './react';
import ReactDOM from './react-dom';

let style = { border: '3px solid red', margin: '5px' };
let element = (
    <div id="A1" style={style}>
        A1
        <div id="B1" style={style}>
            B1
            <div id="C1" style={style}>
                C1
            </div>
            <div id="C2" style={style}>
                C2
            </div>
        </div>
        <div id="B2" style={style}>
            B2
        </div>
    </div>
);
ReactDOM.render(element, document.getElementById('root'));

let reRender2 = document.getElementById('reRender2');
reRender2.addEventListener('click', () => {
    let element2 = (
        <div id="A1" style={style}>
            A1
            <div id="B1" style={style}>
                B1
                <div id="C2" style={style}>
                    C2
                </div>
            </div>
            <div id="B2" style={style}>
                B2
            </div>
        </div>
    );
    ReactDOM.render(element2, document.getElementById('root'));
});

let reRender3 = document.getElementById('reRender3');
reRender3.addEventListener('click', () => {
    let element3 = (
        <div id="A1" style={style}>
            A1
            <div id="B1" style={style}>
                B1
                <div id="C1" style={style}>
                    C1
                </div>
                <div id="C2" style={style}>
                    C2
                </div>
            </div>
        </div>
    );
    ReactDOM.render(element3, document.getElementById('root'));
});
