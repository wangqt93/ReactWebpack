import React,{useEffect} from "react";
import { connect } from 'react-redux'
import { asyncAdd,asyncMinus,getUserApi } from "../../store/actions";
import "./style.scss"

const TwoAsync = (props) => {
    // console.log(props,'异步组件props')

    useEffect(() => {
        props.getUserApi()
    },[])

    return (
        <div className='two-async-container'>
            <h3>Redux异步操作</h3>
            <p>中间件是存在于action与reducer之间</p>
            <p>通过中间件,实现异步操作</p>
            <div className='async-number'>
                <h2 className='number'>{props.numReducer}</h2>
                <h3>我的名字叫: {props.userInfo?.name?.first || ''} {props.userInfo?.name?.last || ''}</h3>
                <div className='btn-container'>
                    <button onClick={() =>props.asyncAdd(1)}>async:+1</button>
                    <button onClick={() =>props.asyncMinus(1)}>async:-1</button>
                </div>
                <button style={{marginTop: '20px'}} onClick={() => props.getUserApi()}>获取用户信息</button>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default  connect(mapStateToProps,{asyncAdd,asyncMinus,getUserApi})(TwoAsync)