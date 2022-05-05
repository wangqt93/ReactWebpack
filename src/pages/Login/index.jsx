import React from "react";
import { connect } from 'react-redux';
import { add,minus } from "../../store/actions";

import "./style.scss";
import {numReducer} from "../../store/reducer";
const Login = (props) => {
    return (
        <div className='Login-container'>
            <p>运算结果</p>
            <h2 className='number'>{props.number}</h2>
            <div className='btn-container'>
                <button onClick={() => props.add(1)}>+1</button>
                <button onClick={() => props.minus(1)}>-1</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        number:state.numReducer
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: (value) => {
//             dispatch(add(value))
//         },
//         minus: value => {
//             dispatch(minus(value))
//         }
//     }
// }

export default connect(mapStateToProps,{add:() =>({type:'add',value: 10}),minus})(Login)
