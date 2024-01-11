 import { useState } from "react";
 function Player({initialName,symbol}){
    const [name,setName]= useState(initialName);
    const [isEditing,setIsEditing]= useState(false);
    function handleClick(){
    setIsEditing( (editing)=>!editing);
  }
  function handleSetName(event){
    setName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{name}</span>;
  let btnCap = 'Edit';
  if(isEditing){
    editablePlayerName = <input type="text" required value={name} onChange={handleSetName}/>

   btnCap ='Save';
  }
    return(
        <li >
          <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleClick}>{btnCap}</button>
         </li>
    )
}export default Player