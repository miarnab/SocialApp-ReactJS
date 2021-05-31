import React, { Component } from "react";
import './App.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Load from './component/Load';

class App extends Component{
    render(){
        return(
            <div>
                <Load/>
            </div>
        )
    }

}
 

export default App;