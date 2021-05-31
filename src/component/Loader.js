import React, { Component, useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Loading extends Component{
    render(){
        const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
          return (
          <div style={ style }>
            <Loader
            type="Puff"
            color="#00BFFF"
            height={200}
            width={200}
            /> 
          </div>
        )
    }
}

export default Loading;