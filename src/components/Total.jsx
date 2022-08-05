import React from 'react';

let Total = (props) => {
    return (
        <div className='totalTipAmount'>
            <div>
                <p>Total</p>
                <p>/ Person</p>
            </div>
            <p>{props.total}</p>
        </div>
    )
}

export default Total;