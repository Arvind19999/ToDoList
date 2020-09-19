import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import './index.css';
const Todo=()=>{
   const [items,setItems]=useState("");
   const [arr,setarr]=useState([]);
   const values = (event) =>{
       setItems(event.target.value);
   } 
       const callEvent=()=>{
       setarr((previous)=>{
         return ([...previous,items])
        
      })
      setItems("");      
      
      }
      const deletItems=(id)=>{
         console.log("deletd");
         setarr((previous)=>{
            return previous.filter((arry,index)=>{return(index !== id);});
         })
         }  

   return(
      <>
            <div className="main_div">
   <div  className="cards">
     <h4 className="heading">ToDoList App</h4>
     <div className="upper">
  <input className="inputs" type="text" onChange={values}  placeholder="Enter the items"/>
  <button className="btn"  onClick={callEvent} > <h1>+</h1> </button>
     </div>
     <br />
     <ol>
          {arr.map((items,index)=>{
             console.log(index);
     return(<>
   <List text = {items} key={index} id={index}
   onSelect = {deletItems}
    />
     <br />
     </>)
          })}
     </ol>
   </div>
 
   </div>
      </>
   )
}

ReactDOM.render(
   <>
   <Todo />
   </>
   ,document.getElementById("root"));