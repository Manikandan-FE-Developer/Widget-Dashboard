import React, { useState } from 'react';

export default function Sidebar({ isOpen, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const checkboxes = {
    CSPM: ['Cloud Accounts', 'Cloud Account Risk Assessment'],
    CWPP: ['Top 5 Namespace Specific Alerts', 'Workload Alerts'],
    Image: ['Image Risk Assessment', 'Image Security Issues'],
    Ticket: ['Open Tickets', 'Resolved Tickets']
  };

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-header">
          <p>Add Widget</p>
          <span className="close-btn" onClick={onClose}>&times;</span>
        </div>
        <div className="sidebar-body">
          <p>Personalize your dashboard by adding the following widget</p>
          <ul>
            {Object.keys(checkboxes).map((item) => (
              <li
                key={item}
                onClick={() => handleListItemClick(item)}
                className={selectedItem === item ? 'active' : ''}
              >
                {item}
              </li>
            ))}
          </ul>
          <hr />
          {selectedItem && checkboxes[selectedItem].map((label) => (
            <div key={label}>
              <label>
                <input type="checkbox" /> {label}
              </label>
              <br />
            </div>
          ))}
        </div>
        <div className="sidebar-footer">
          <button className='btn btn-secondary' onClick={onClose}>Cancel</button>
          <button className='btn btn-primary' onClick={onClose}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
