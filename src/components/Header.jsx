import React from 'react';

let Header = (props) => {
    let len = props.title.length;
    let first = props.title.substring(0, len/2);
    let second = props.title.substring(len/2);
    return (
        <h1 className='heading'>{first}<br />{second}</h1>
    )
}

export default Header;