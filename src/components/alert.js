import React from 'react'

export default function Alert(props) {
  const capitalise=(word)=>{
const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
   props.Alert&& <div class={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalise(props.Alert.type)} </strong>{props.Alert.msg} 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}
