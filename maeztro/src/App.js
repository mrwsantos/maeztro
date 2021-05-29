import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { UserStorage } from './UserContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Docs from './components/Docs/Docs';
import Faq from './components/FAQ/Faq';
import Courses from './components/Courses/Courses';
import Curso from './components/Courses/Curso';

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
              <Route path="/documentacao" element={<Docs />} />
              <Route path="/faqs" element={<Faq />} />
              <Route path="/cursos" element={<Courses />} />
              <Route path="/curso/:nomeCurso" element={<Curso />} />
              <Route path="/*" element={<Login />} />
            </Routes>
            {/* <Footer /> */}
          </section>
        </UserStorage>
      </BrowserRouter>
    </main>
  );
};

export default App;
