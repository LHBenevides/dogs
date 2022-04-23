import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Api from './api/Api';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserStorage>
          <main className="appBody">
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route path='conta/*' element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
              />
              <Route path='foto/:id' element={<Photo />} />
              <Route path='perfil/:user' element={<UserProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
