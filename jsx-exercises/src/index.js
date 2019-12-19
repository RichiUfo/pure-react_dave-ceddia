import React from 'react';
import ReactDOM from 'react-dom';

function Title() {
    return (<div className='title'>
        The Title
    </div>);
}

function Author() {
    return (<div className='author'>
        The{' '}Author
    </div>);
}

function Information() {
    return (
    <ul className='stats'>
        <li className='rating'>
            5 stars
        </li>
        <li className='isbn'>
            12-345678-910
        </li>
    </ul>
    );
}

function MyThing(){
    return (<div className='book'>
        <Title/>
        <Author/>
        <Information/>
    </div>);
}

ReactDOM.render(
    <MyThing/>,
    document.getElementById('root')
);