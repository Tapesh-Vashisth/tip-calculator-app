import React, {useState} from 'react'
import Console from './Console';
import Header from './Header';
import Result from './Result';


let App = (props) => {
    let [state, setState] = useState({
        bill : 0,
        numberOfPeople: 0,
        tipPercentage: 0,
        zeroOrNot: false
    });
    
    let tipPercent = state.tipPercentage;

    function PercentChange(e, value){
        tipPercent = value;
    }

    function onReset(e){
        let bill = Number(document.getElementById("bill").value);
        let count = Number(document.getElementById("peopleCount").value);
        if (count === 0){
            setState({
                ...state,
                zeroOrNot: true
            })
        }else{
            setState({
                bill : bill,
                numberOfPeople: count,
                tipPercentage: tipPercent,
                zeroOrNot: false
            })
        }
    }

    return (
        <div className='container'>
            <Header title = "SPLITTER" />
            <div className='main'>
                <Console onpercentChange = {PercentChange} zeroOrNot = {state.zeroOrNot} />
                <Result {...state} onReset = {onReset} />
            </div>
        </div>
    )
};

export default App;