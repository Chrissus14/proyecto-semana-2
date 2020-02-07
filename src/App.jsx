import React from 'react';
import Navbar from './components/Navbar';
import MainBlog from './components/MainBlog';

const App = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <Navbar />
        <MainBlog />
      </div>
    </div>
  );
};

export default App;
