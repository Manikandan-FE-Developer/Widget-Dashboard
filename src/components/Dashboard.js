import React, { useState, useEffect } from 'react';
import Category from './Category';
import AddWidget from './AddWidget';
import dashboardData from '../dashboardData.json';
import Sidebar from './Sidebar';

export default function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setCategories(dashboardData.categories);
  }, []);

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false); 

  const addWidgetToCategory = (widget) => {
    setCategories(categories.map(cat => 
      cat.id === selectedCategory.id
        ? { ...cat, widgets: [...cat.widgets, widget] }
        : cat
    ));
    closeModal();
  };

  const removeWidgetFromCategory = (categoryId, widgetId) => {
    setCategories(categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, widgets: cat.widgets.filter(widget => widget.id !== widgetId) }
        : cat
    ));
  };

  return (
    <div className="dashboard-container">
      <div className="flex">
        <div>
          <h3>CNAPP Dashboard</h3>
        </div>
        <div className="add">
          <button onClick={openSidebar}>Add Widget <i className="fa-solid fa-plus"></i></button>
          <button><i className="fa-solid fa-repeat"></i></button>
          <button><i className="fa-solid fa-ellipsis-vertical"></i></button>
          <div className="select-con">
            <i className="fa-solid fa-clock"></i>
            <select>
              <option> Last 2 days</option>
              <option>Last 4 days</option>
              <option>Last Week days</option>
              <option>Last Month days</option>
            </select>
          </div>
        </div>
      </div>
      <div className="body">
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
            onAddWidget={() => openModal(category)}
            onRemoveWidget={removeWidgetFromCategory}
          />
        ))}
        {isModalOpen && selectedCategory && (
          <AddWidget
            onAdd={addWidgetToCategory}
            onClose={closeModal}
            category={selectedCategory}
          />
        )}
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={closeSidebar} 
        />
      </div>
    </div>
  );
}