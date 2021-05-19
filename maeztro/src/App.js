import React from 'react';
import './App.css';
import Api from './api/Api';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login/Login';
import { UserStorage } from './UserContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Note from './components/Note';

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Sidebar />
          <section className="mainContent">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/*" element={<Login />} />
              <Route path="/note/*" element={<Note />} />
            </Routes>
            <Footer />
          </section>
        </UserStorage>
      </BrowserRouter>
    </main>
  );
};

export default App;
