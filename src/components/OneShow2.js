import React, { Component } from 'react'

export default class OneShow2 extends Component {
    render() {
        return (
 <div style={{backgroundColor:"white", border:'solid 1px grey',margin:'5px',borderRadius:"2%",position:"relative",height:"3500px"}} > 


   <div>
                  <div  style={{ width: '20rem',height:'550px',padding:"10px",float:"left"}} >

                  {this.props.show.image !== null ? <img width="100%" src={this.props.show.image.original} alt=" " style={{borderRadius:"5%",marginTop:"20px"}}/> : <img width="100%" src="https://i.picsum.photos/id/563/200/300.jpg?hmac=SZO4DbUo3eM7wbKdFWm2jUkpnLD7OkJda_aTTd8FP9k" alt=" " style={{borderRadius:"15%"}}/> }
                           
                                      
                                 
                 </div>
                 <div style={{width:"550px", float:"right"}}>
                 <h2>{this.props.show.name}</h2>
                                      <h4>Genres:</h4>
                                      <p> {this.props.show.genres.map(item=>`${item} `)} </p>  

                                      <h4>Language:</h4>
                                      <p>{this.props.show.language}</p>
                                      <h4>Summary:</h4>
                                      <p>{this.props.show.summary.replace(/<[^>]+>/g, '')}</p>
                                     <a target="_blank" href={this.props.show.url}><button style={{backgroundColor:"#A4F5F7",padding:"10px",fontSize:"30px",borderRadius:"10%"}}>More Details</button></a> 

                 </div>
                
     </div>
                 <div style={{position:"absolute",bottom:"0px",display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
                     {this.props.episodes.map(item=>{
                        return <a  target="_blank" href={item.url}>
                            <div style={{margin:"2px",border:"solid 1px #D7F7F7",borderRadius:"3%",padding:"3px",backgroundColor:"#A4F5F7",justifyContent:"center"}}>
                            <p>{`S0${item.season} E0${item.number}`}</p>
                            <p style={{fontSize:"10px"}}>{item.name}</p>
                            <img style={{width:"170px",borderRadius:"3px"}} src={item.image.medium}></img>
                           
                            
                        </div>
                        </a>
                     })}
                 </div>

           
            </div>
        ) 
    }
}
