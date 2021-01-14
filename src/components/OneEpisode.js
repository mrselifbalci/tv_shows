import React, { Component } from 'react'
import OneEpisode2 from './OneEpisode2'

export default class OneEpisode extends Component {
    render() {
        return (
            <div>
                 <div style={{display:"flex",flexWrap:"wrap",marginLeft:"65px",justifyContent:"center"}}>
                    
               
               {this.props.episodes.map(episode=><OneEpisode2 key={episode.id} id={episode.id} episode={episode} goToEpisode={this.props.goToEpisode} episodes={this.props.episodes}/>)} 
          </div>
                
            </div>
        )
    }
}
