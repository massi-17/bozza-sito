import './App.css';
import Footer from './components/Footer';
import Explorer from './components/Explorer';
import Tabs from './components/Tabs';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabChange(tabIndex) {
    setActiveTab(tabIndex);
    console.log('Tab cambiato:', tabIndex);
  }

  return (
    <div id="wrapper">
      <div className='top'>
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
        <div className="main-wrapper">
          <Explorer activeTab={activeTab} onTabChange={handleTabChange} />
          <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </div>
      <div className='bottom'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
