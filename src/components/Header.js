import React, { Component } from 'react'
import header from './images.jpeg'

export default class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#D7F7F7"}} >
               <img src={header}  alt="header" style={{width:"100%",borderBottomLeftRadius:"40%",borderBottomRightRadius:"2%"}}></img>
                
            </div>
        )
    }
}
