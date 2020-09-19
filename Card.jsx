import React from 'react';

function Card(props){
    return(
       <>
 <div className="card">
 <div className="card_body">
 <div className="div_img">
 <img src={props.imgsrc}
    alt="dark_series" className = "images"/>
 </div>
 
 <div className="rem">
 <p>{props.Stitle}</p>
 <h3>{props.Sname}</h3>
 <a href={props.Slink} target="_blank"><button type="button" >Watch</button></a>
 </div>
 </div>
 </div>
       </>
    )
 }

 export default Card;