import React from 'react';

let PeopleCount = (props) => {
    return (
        <div className='billNumberofpeople bottom'>
            <div>
                <p>Number of People</p>
                {props.zeroOrNot === true ? <p>Can't be zero</p>: null}
            </div>
            <div>
                <img src='images/icon-person.svg' alt='$'></img>
                <input type="text" defaultValue="0" id='peopleCount' style={props.zeroOrNot === true ? {border: "2px solid orange"}: null} ></input>
            </div>
        </div>
    ); 
}

export default PeopleCount;