import React from 'react';
import Navbar from './components/Navbar';
import MainBlog from './components/MainBlog';
import CardSection from './components/CardSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <Navbar />
        <MainBlog />
        {/* <CardSection />
        <CardSection />
        <CardSection />
        <Footer /> */}
      </div>
    </div>
  );
};

export default App;
