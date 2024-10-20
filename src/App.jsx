import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import TopBar from './components/TopBar.jsx';
import Container from './components/Container.jsx';

const App = () => {
  return (
    <Router>
    <div className="App">
      <TopBar/>
      <Header />
      <Container />
      
     
    </div>
      
    
  </Router>
  );
};

export default App;