import React, { Component } from 'react'
import Main from './Main'

export default class MainPage extends Component {
    render() {
        return (
            <div style={{display:"flex",flexWrap:"wrap",marginLeft:"65px"}}>
                 {this.props.shows.map(show=><Main key={show.id} id={show.id} show={show} goToEpisode={this.props.goToEpisode}/>)} 
            </div>
        ) 
}
}  