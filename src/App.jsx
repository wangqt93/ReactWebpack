
import React from 'react';
import "./style.scss";
import One from './pages/One';
import Login from "./pages/Login";
import {Provider} from 'react-redux'
import store from "./store";

export default function App() {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
        <Provider store={store}>
            <Login></Login>
            <One></One>
        </Provider>

    </div>
  )
}
