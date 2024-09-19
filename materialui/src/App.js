import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import InventoryTable from "./components/Tables";
import Header from './components/Header';
import './css/app.css'; // Import the CSS file
import '@fontsource/inter';
import HomePage from './pages/HomePage'; // Import your new Home component

function App() {
  return (
    <Router>
      <div className="app-container">
        <div style={{ display: 'flex' }}>
          {/* Sidebar */}
          <Sidebar />
          {/* Main content area */}
          <div className="main-content" style={{ flexGrow: 1 }}>
            {/* Define routes for different pages */}
            <HeaderConditionalWrapper>
              <Routes>
                {/* Home Page as the default route */}
                <Route path="/" element={<HomePage />} />
                <Route path="/inventory" element={<InventoryTable />} />
              </Routes>
            </HeaderConditionalWrapper>
          </div>
        </div>
      </div>
    </Router>
  );
}

const HeaderConditionalWrapper = ({ children }) => {
  const location = useLocation();
  
  return (
    <>
      {/* Conditionally render Header only for the /inventory path */}
      {location.pathname === '/inventory' && <Header />}
      {children}
    </>
  );
};

export default App;
