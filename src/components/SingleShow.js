import React, { Component } from 'react'

export default class SingleShow extends Component {
    render() {
        // console.log(this.props.show.id)
        return (
            
                
               <option value={this.props.show.id} key={this.props.show.id} >{this.props.show.name} </option>
             
              
                
          
        )
    }
}


 

