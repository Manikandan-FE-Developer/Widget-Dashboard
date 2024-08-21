# Widget Dashboard

**Widget Dashboard** is a dynamic dashboard application that allows users to manage and customize their dashboard by adding and removing widgets. It features a responsive design, a sidebar for adding widgets, and local storage for persisting data.

## Features

- **Dynamic Widget Management**: Add, remove, and organize widgets within categories.
- **Responsive Design**: Works seamlessly on various screen sizes.
- **Local Storage**: Stores widget and category data locally in the browser.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/widget-dashboard.git
   cd widget-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

### Usage

- **Adding Widgets**: Click the "Add Widget" button to open the sidebar. Fill in the widget details and add it to the selected category.
- **Removing Widgets**: Use the cross icon on each widget to remove it from the category.
- **Searching Widgets**: Utilize the search functionality to filter through widgets.

### Project Structure

- `src/components/`: Contains React components such as `Dashboard`, `Category`, `Widget`, `AddWidget`, and `Sidebar`.
- `src/dashboardData.json`: Contains the initial data structure for categories and widgets.
- `src/App.js`: The main entry point of the application.
- `src/index.js`: The entry point for React rendering.

### Local Storage Integration

The application uses the browser’s local storage to persist categories and widgets data. This ensures that user changes are saved and maintained across page reloads.

### Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
