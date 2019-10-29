import React from 'react'

const Person = (props) => {
   
  
    return (
        <div className="card">
            <div> {props.ele.houseName} </div>
         
            <img src={props.ele.imgSrc} />
            <div>{props.ele.founder} </div>
            <div> {props.ele.element} </div>
           
        </div>
    )
}

export default Person

