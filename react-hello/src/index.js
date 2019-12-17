import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld(){
    return (
    <div>
            <Hello/> 
            <World/>
        </div>
    );
}

function Hello(){
    var word = "hell no ";
    return (
        <span>{word}</span>
    );
}

function World(){
    return (
        <span> World!</span>
    );
}

ReactDom.render(
    <HelloWorld/>,
    document.querySelector('#root')
);