import React from 'react';

export default function Widget({ widget, onRemove }){
  return(
    <div className="widget col-md-3">
      <div className='widget-header'>
        <h4>{widget.name}</h4>
        <i className="fa-solid fa-xmark" onClick={onRemove}></i>
      </div>
      <p>{widget.text}</p>
    </div>
  );
}