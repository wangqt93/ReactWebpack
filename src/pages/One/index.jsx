import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
 // import* as types from "../../store/actions";
import { add,minus } from "../../store/actions";

import './style.scss'

 class One extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {add,minus} = this.props
        return (
          <div className='one-container'>
            <p>获取结果</p>
            <h2 className='number'>{this.props.number}</h2>
            <div className='btn-container'>
              <button onClick={() => add(3)}>+3</button>
              <button onClick={() => minus(3)}>-3</button>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.numReducer
    }
}
// 写法一
// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: value => dispatch(add(3)),
//         minus: value => dispatch(minus(3))
//     }
// }

// 写法二: bindActionCreators运用
// const mapDispatchToProps = dispatch => bindActionCreators({add,minus},dispatch)
// or
// const mapDispatchToProps = dispatch => bindActionCreators(types,dispatch)



// 写法三
export default connect(mapStateToProps,{add:() => ({type: 'add',value:3}),minus})(One)


// export default connect(mapStateToProps,mapDispatchToProps)(One)