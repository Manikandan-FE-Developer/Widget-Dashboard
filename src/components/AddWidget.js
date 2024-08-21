import React, { useState } from 'react';

export default function AddWidget({ onAdd, onClose, category }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: new Date().toISOString(),
      name,
      text
    };
    onAdd(newWidget);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <i className="fa-solid fa-xmark" onClick={onClose}></i>
        <h4>Add Widget to {category.name}</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Widget Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required 
            />
          </div>
          <div>
            <label>Widget Text</label>
            <textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              rows="4"
              required 
            />
          </div>
          <div className='buttons'>
            <button className="btn btn-night" type="button" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}