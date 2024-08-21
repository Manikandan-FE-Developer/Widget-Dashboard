import React from 'react';
import Widget from './Widget';

export default function Category({ category, onAddWidget, onRemoveWidget }){
  return (
    <div className='widget-container'>
        <div className="category">
            <h4>{category.name}</h4>
            <div className="widget-list">
                {category.widgets.map(widget => (
                <Widget
                    key={widget.id}
                    widget={widget}
                    onRemove={() => onRemoveWidget(category.id, widget.id)}
                />
                ))}
                <div className="addWidget">
                    <button onClick={onAddWidget}><i className="fa-solid fa-plus"></i> Add Widget</button>
                </div>
            </div>
        </div>
    </div> 
  );
};