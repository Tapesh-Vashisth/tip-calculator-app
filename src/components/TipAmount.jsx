import React from 'react';

let TipAmount = (props) => {
    return (
        <div className='totalTipAmount'>
            <div>
                <p>Tip Amount</p>
                <p>/ Person</p>
            </div>
            <p>{props.tipAmount}</p>
        </div>
    )
}

export default TipAmount;