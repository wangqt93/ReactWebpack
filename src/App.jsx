
import React from 'react';
import "./style.scss";
import One from './pages/One';
import Login from "./pages/Login";
import MyGen from "./pages/myGen";
import TwoAsync from "./pages/AsyncThunk"
import {Provider} from 'react-redux'
import store from "./store";
import SageCount from './pages/sageCount'
export default function App() {
  return (
    <div>
        <Provider store={store}>
            {/*<div style={{display:'flex',justifyContent:'space-around'}}>*/}
            {/*    <Login></Login>*/}
            {/*    <One></One>*/}
            {/*</div>*/}
            {/*<TwoAsync></TwoAsync>*/}
            {/* <MyGen></MyGen> */}
            <SageCount></SageCount>
        </Provider>

    </div>
  )
}
