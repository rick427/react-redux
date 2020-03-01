import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from '../redux';
import '../App.css';

const HooksCakeComponent = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div className="cake-wrapper">
           <h3>Num of cakes - {numOfCakes}</h3>
           <button onClick={() => dispatch(buyCake())}>buy cake</button> 
        </div>
    )
}

export default HooksCakeComponent
