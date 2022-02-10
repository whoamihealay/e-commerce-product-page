import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App mx-auto max-w-7xl">
      <Header />
      <hr className="hidden py-2 sm:block" />
      <Main />
      {/* Images sliders & selectors */}
      {/* Description */}

      <Footer />
    </div>
  );
}

export default App;
