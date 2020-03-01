import React, {useState} from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux';
import '../App.css';

const NewCakeComponent = props => {
    const [number, setNumber] = useState(1);
    return (
        <div className="cake-wrapper">
            <h2>Number of Cakes {props.numOfCakes}</h2>
            <input onChange={e => setNumber(e.target.value)} type="text" value={number} />
            <button onClick={() => props.buyCake(number)}>buy {number} cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeComponent)
