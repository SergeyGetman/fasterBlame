import React from 'react';
import './App.css';
import Container from './components/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Исправлен импорт
import Coursea from './components/Coursea';
import MainAplication from './components/MainAplication';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainAplication>
          <Routes>
            <Route path="/" element={<Coursea />} />
            <Route path="/coursea" element={<Coursea />} />
          </Routes>
        </MainAplication>
      </BrowserRouter>
    </>
  );
}

export default App;
