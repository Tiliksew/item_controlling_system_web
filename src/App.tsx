import React from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/home.page';
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import AboutPage from './pages/about.page';

const App: React.FC = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element ={<HomePage/>}></Route >
        <Route path='/about'  element ={<AboutPage/>}></Route >
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;


