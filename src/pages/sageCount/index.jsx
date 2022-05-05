import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import { sagax,sagay,todes } from '../../store/actions'


 function SageCount(props) {
  console.log(props,'xxx');
  const {isLoading,data,error} = props.fetchRes
  useEffect(() => {
    props.todes()
   },[])
  return (
    <>
        {
          isLoading ? <div>loading...</div> : error ? <div>{error.message}</div> : data.length>0 && data.map(item => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            )
          }) 
        }
        <div>SageCount:{props.number}</div>
        <button onClick={() => props.sagay()}>sagay</button>
        <button onClick={() => props.sagax()}>sagax</button>
        {/* <button onClick={() => props.todes()}>todes</button> */}
    </>
  )
}
const mapStateToProps = (state) => {
  return {number: state.numReducer,fetchRes:state.fetchReducer}
}

export default connect(mapStateToProps,{sagax,sagay,todes})(SageCount)
