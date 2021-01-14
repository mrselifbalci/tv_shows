import React, { Component } from 'react'
import SingleEpisode from './SingleEpisode'
import SingleShow from './SingleShow'
import home from './home.jpeg'




export default class Shows extends Component {
   
    render() {
       
        return ( 

            
            <div style={{display:"flex",flexWrap:"wrap"}} >

                
                <img src={home} style={{width:"100px",marginLeft:"50px"}} onClick={this.props.homepage}></img>
                {/* <button style={{margin:"10px",marginLeft:"75px"}} onClick={this.props.homepage}>Home Page</button> */}

              <div style={{position:"relative"}}>

               <form style={{ display: "flex",flexWrap:"wrap"}} onChange={this.props.selectShow} >



                    <select style={{margin:'10px',width:"505px"}}>
                        <option>Select a show...</option>
                        {this.props.shows.map(show=> <SingleShow key={show.id} id={show.id} show={show} selectShow={this.props.selectShow}/>  )}
                    </select>



                    <select style={{margin:'10px',width:"505px"}}>
                        <option>Select an episode...</option>
                        {this.props.episodes.map(episode=> <SingleEpisode episode={episode} key={episode.id}/>)}
                    </select>



                    {/* <input placeholder="Search episode..." style={{margin:'10px',float:"right",width:"320px"}} ></input> */}
               </form>
               </div>
                   
            </div>
            
        )
    }
}



  

