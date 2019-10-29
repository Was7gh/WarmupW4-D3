import React, { Component } from "react";
import Houses from './Houses'
import Family from "./Family";
import Person from "./Person";
import styles from './styles.css'


class App extends Component {

 
  render() {
    // let person =Houses.map(e=>{
    //   return <Person   ele= {e}/> 
    //   }) 
      
      // let parent =Houses.map(e=>{
      //   return <Family  ele= {e}/>
      //   }) 
    //console.log(Houses)
    return (
      <div>
       
       {Houses.map(e=><Person  ele= {e}/>)}
       {Houses.map(e=><Family  ele= {e}/>)}
        <h2> </h2>
      </div>    
    );
  }
}

export default App;
