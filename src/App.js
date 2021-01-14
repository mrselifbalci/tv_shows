import React, { Component } from 'react'
import './App.css';
import allshows from './shows'
import Shows from './components/Shows'
import Header from './components/Header';
import MainPage from './components/MainPage';
import gameOfThronesEpisodes from './jsonfiles/episodes'
import OneShow from './components/OneShow'








export default class App extends Component {

state={
  shows:allshows,
  episodes:gameOfThronesEpisodes,
  oneShow:[],
  

} 

selectShow=(e)=>{
  console.log(e.target.value)
 this.setState({
  
   episodes:gameOfThronesEpisodes
 })

}

goToEpisode=(name)=>{
  this.setState({
    shows:[],
    oneShow: allshows.filter(item=>item.name===name)
      
  })
}

homepage=()=>{
  this.setState({
    shows:allshows,
    oneShow:[]
  })
}

// search=(e)=>{

//   this.setState({
//     episodes: gameOfThronesEpisodes.filter(item=>item.name.includes(e.target.value))
//   })
// }
  render() {
    return (
      
      <div style={{backgroundColor:"#D7F7F7"}}  >
        
        <Header />
        <br/>
        <Shows shows={this.state.shows}  selectShow={this.selectShow} episodes={this.state.episodes} homepage={this.homepage} search={this.search}/>
        
        <OneShow oneShow={this.state.oneShow} shows={this.state.shows} episodes={this.state.episodes}/>
        
        <MainPage shows={this.state.shows} selectShow={this.selectShow} goToEpisode={this.goToEpisode}/>
      </div>
    )
  }
}

