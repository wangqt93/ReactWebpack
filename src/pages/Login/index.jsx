import React from "react";
import { connect } from 'react-redux'

import "./style.scss"
const Login = (props) => {

    const add = () => {
        props.getNumber({type: 'add',value:2})
    }
    const minus = () => {
        props.getNumber({type:'minus',value:1})
    }
    return (
        <div className='Login-container'>
            <p>运算结果</p>
            <h2 className='number'>{props.number}</h2>
            <div className='btn-container'>
                <button onClick={add}>+1</button>
                <button onClick={minus}>-1</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        number:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNumber: (action) => {
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)