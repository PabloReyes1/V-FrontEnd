import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ClientPage from './pages/Client';

function App() {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

function AppWithRouter() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <div className="h-screen flex flex-col">
        <NavigationBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/client" element={<ClientPage />} />
          </Routes>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
