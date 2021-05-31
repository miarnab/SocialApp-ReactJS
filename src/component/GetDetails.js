import React, { Component, useState, useEffect } from 'react';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import Card from 'bootstrap/dist/css/bootstrap.css';

const apiURL="https://reqres.in/api/users?delay=3";

const Data=()=>{
    const [datas,setdatas]=useState({})
    useEffect(() => {
        getUserWithFetch();
      }, []);
    
      const getUserWithFetch = async () => {
        const response = await fetch(apiURL);
        const jsonData = await response.json();
        setdatas(jsonData);
      };
      var data=setdatas;
      var image=data.group.map(data=>data.avatar);
      var firstname=data.group.map(data=>data.first_name);
      var lastname=data.group.map(data=>data.last_name);
            
                        return(
                            <div className="details">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ image } />
            <Card.Body>
            <Card.Title>{ firstname } { lastname }</Card.Title>
            </Card.Body>
            </Card>
            </div>
        )
}




export default Data;
