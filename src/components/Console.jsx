import React from 'react';
import Bill from './Bill';
import Tip from './Tip';
import PeopleCount from './PeopleCount';

let Console = (props) => {
    return (
        <div className='console'>
            <Bill />
            <Tip onpercentChange = {props.onpercentChange} />
            <PeopleCount zeroOrNot = {props.zeroOrNot} />
        </div>
    );
}

export default Console;