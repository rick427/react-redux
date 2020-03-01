import React from 'react';
import {connect} from 'react-redux';
import { buyIcream } from '../redux';
import "../App.css"

const IceCreamComponent = props => {
    return (
        <div className="cake-wrapper">
            <h2>Num of Ice-creams - {props.numOfIcreams}</h2>
            <button onClick={props.buyIcream}>buy ice cream</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    numOfIcreams: state.iceCream.numOfIcream
});

const mapDispatchToProps = dispatch => ({
    buyIcream: () => dispatch(buyIcream())
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent)
