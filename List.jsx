import React from 'react';

const List=(props)=>{
    return(
        <>
        <li><span className="del" onClick={()=>{props.onSelect(props.id)}}>X</span>{props.text}</li>
  
        </>
    )
}


export default List;