import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld(){
    return React.createElement(
        'span',
        { className: 'song-name'},
        'Alabama'
    );
}

ReactDom.render(
    <HelloWorld/>,
    document.querySelector('#root')
);