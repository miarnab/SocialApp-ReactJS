import React, { Component, useEffect, useState } from 'react';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from './Loader';
import Data from './GetDetails';

class Load extends Component{
  constructor(props){
    super(props);
    this.state= { done: undefined };
  }
  componentDidMount() {
    setTimeout(() => {
        <Data/>
        this.setState({ done: true });
    }, 3000);
  }
  render() {
    return (
      <div>
        {!this.state.done ? (
          <Loading />
        ) : (
          <Data/>
        )}
      </div>
    );
  }
}



export default Load;