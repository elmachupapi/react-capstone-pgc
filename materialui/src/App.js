import React from 'react';
import Sidebar from "./components/Sidebar";
import InventoryTable from "./components/Tables";
import Header from './components/Header';
import './css/app.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Sidebar />
        {/* Main content area */}
        <div className="main-content">
          {/* Header section with title and search bar */}
          <Header />
          {/* Table content area */}
          <InventoryTable />
        </div>
      </div>
    </div>
  );
}

export default App;
