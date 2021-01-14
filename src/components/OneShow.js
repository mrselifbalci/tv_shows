import React, { Component } from 'react'
import OneShow2 from './OneShow2'


export default class OneShow extends Component {
    render() {
        return (

            <div style={{display:"flex",flexWrap:"wrap",marginLeft:"65px",justifyContent:"center"}}>
               
                 {this.props.oneShow.map(show=><OneShow2 key={show.id} id={show.id} show={show} goToEpisode={this.props.goToEpisode} episodes={this.props.episodes}/>)} 
            </div>
        )
    }
}
