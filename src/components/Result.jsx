import React from 'react';
import TipAmount from './TipAmount';
import Total from './Total';

let Result = (props) => {
    let {bill, tipPercentage, numberOfPeople} = props;

    let tipAmount, total;
    if (numberOfPeople === 0){
        tipAmount = 0;
        total = 0;
    }else{
        tipAmount = (bill*tipPercentage/100/numberOfPeople);
        total = (bill/numberOfPeople + tipAmount);
        tipAmount = Number(tipAmount).toFixed(2);
        total = Number(total).toFixed(2);
    }


    return (
        <div className='result'>
            <TipAmount tipAmount = {tipAmount} />
            <Total total = {total} />
            <button className='reset' onClick={props.onReset} >RESET</button>
        </div>
    );
}

export default Result;