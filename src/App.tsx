import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App mx-auto max-w-5xl">
      <Header />
      <hr className="hidden py-2 md:block" />
      <Home />
      {/* Images sliders & selectors */}
      {/* Description */}

      <Footer />
    </div>
  );
}

export default App;
