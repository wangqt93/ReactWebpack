import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.scss'



 class One extends Component {
    constructor(props) {
        super(props);
    }
    add = () => {
        this.props.getNumber({type: 'add',value:1})
    }
    minus = () => {
        this.props.getNumber({type:'minus',value:3})
    }
    render() {

    return (
      <div className='one-container'>
        <p>获取结果</p>
        <h2 className='number'>{this.props.number}</h2>
        <div className='btn-container'>
          <button onClick={this.add}>+1</button>
          <button onClick={this.minus}>-1</button>
        </div>
      </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNumber: action => dispatch(action)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(One)