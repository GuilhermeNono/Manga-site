import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import MangaProvider from "./context/MangaContext";
import MangaInfo from "./pages/MangaInfo";

const App: React.FC = () => {

  return (
    <MangaProvider>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/manga/:id" element={<MangaInfo />}/>
        </Routes>
      </Router>
    </MangaProvider>
  );
};

export default App;
