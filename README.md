# Widget Dashboard

## Overview

The **Widget Dashboard** is a dynamic and responsive dashboard application built with React. It allows users to manage widgets within categories, including adding and removing widgets. Widgets are organized into categories and are displayed in a grid layout that adjusts automatically as widgets are added or removed.

## Features

- **Dynamic Widget Addition**: Add widgets to specific categories with customizable names and descriptions.
- **Responsive Layout**: Widgets automatically wrap to new rows when there is no space in the current row.
- **Widget Management**: Easily remove widgets and manage categories.
- **Sidebar for Widget Selection**: Use a sidebar to add widgets to the dashboard.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Bootstrap**: CSS framework for responsive design.
- **CSS**: Styling the components.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repository-name
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

3. **Interact with the dashboard:**
   - Use the "Add Widget" button to open the sidebar and add new widgets.
   - Widgets will appear in the selected category and wrap to new rows as needed.
   - Remove widgets by clicking the close icon on each widget.

## Folder Structure

```
/src
  /components
    - AddWidget.js
    - Category.js
    - Dashboard.js
    - Sidebar.js
    - Widget.js
  /styles
    - App.css
  - App.js
  - index.js
  - dashboardData.json
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
