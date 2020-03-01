import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux';
import '../App.css';

const CakeComponent = props => {
    return (
        <div className="cake-wrapper">
            <h2>Number of Cakes {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent)
