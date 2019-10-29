import React, { Component } from 'react'

export default class Family extends Component {
    render(props) {
        return (
        <div className="card">
            <div> {this.props.ele.notableCharacter.charName}</div>
         
            <img src={this.props.ele.notableCharacter.imgSrc} />
            <div>{this.props.ele.houseName} </div>
           
           
           
        </div>
        )
    }
}
