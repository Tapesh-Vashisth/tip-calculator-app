import React from 'react';

let Bill = (props) => {
    return (
        <div className='billNumberofpeople'>
            <p>Bill</p>
            <div>
                <img src='images/icon-dollar.svg' alt='$'></img>
                <input type="text" defaultValue="0" id='bill'></input>
            </div>
        </div>
    ); 
}

export default Bill;