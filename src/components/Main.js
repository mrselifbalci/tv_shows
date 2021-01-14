import React, { Component } from 'react'

export default class Main extends Component {
    render() { 
        return (
            <div style={{backgroundColor:"white", border:'solid 1px grey',margin:'5px',display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",borderRadius:"5%" }} onClick={this.props.goToEpisode.bind(this,this.props.show.name)}> 


 
                  <div  style={{ width: '10rem',height:'500px',padding:"10px"}} >

                  {this.props.show.image !== null ? <img width="100%" src={this.props.show.image.medium} alt=" " style={{borderRadius:"5%"}}/> : <img width="100%" src="https://i.picsum.photos/id/563/200/300.jpg?hmac=SZO4DbUo3eM7wbKdFWm2jUkpnLD7OkJda_aTTd8FP9k" alt=" " style={{borderRadius:"5%"}}/> }
                                 
                                  
                                  <div style={{flex: 1}}>
                                      <h2>{this.props.show.name}</h2>
                                      <h4>Genres:</h4>
                                      <p> {this.props.show.genres.map(item=>`${item} `)} </p>  

                                      <h4>Language:</h4>
                                      <p>{this.props.show.language}</p>
                                      
                                  </div>
                 </div>
           
            </div>
        ) 
    }
}
