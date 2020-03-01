import React from 'react';
import {useSelector} from 'react-redux';
import '../App.css';

const HooksCakeComponent = () => {
    const numOfCakes = useSelector(state => state.numOfCakes);

    return (
        <div className="cake-wrapper">
           <h3>Num of cakes - {numOfCakes}</h3>
           <button>buy cake</button> 
        </div>
    )
}

export default HooksCakeComponent
