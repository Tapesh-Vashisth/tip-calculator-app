import React from 'react';

let tipPercentage = [5, 10, 15, 25, 50];

let Tip = (props) => {
    return (
        <div className='tipPercentage'>
            <p>Select Tip %</p>
            <div>
                {tipPercentage.map((x, i) => <p key={i} onClick = {function(e){
                    props.onpercentChange(e, x)
                }}>{x}%</p>)}
                <input type="text" defaultValue="Custom" onChange = {function(e){
                    props.onpercentChange(e, e.target.value)
                }}></input>
            </div>
        </div>
    ); 
}

export default Tip;