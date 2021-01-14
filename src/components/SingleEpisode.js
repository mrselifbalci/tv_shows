import React, { Component } from 'react'

export default class SingleEpisode extends Component {
    render() {
        return (
            <option value={this.props.episode.id} key={this.props.episode.id} >
              
                {`${this.props.episode.name} - Season: ${this.props.episode.season} Episode: ${this.props.episode.number} `}
                </option>
        )
    }
}
