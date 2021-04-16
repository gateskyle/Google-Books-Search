import React from "react";
import { BrowserRouter , Route } from "react-router-dom";
import Navbar from './components/Navbar';
import SearchBooks from './components/SearchBooks';
import SavedBooks from './components/SavedBooks';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar />
        <Route exact path={'/'} component={SearchBooks} />
        <Route exact path={'/saved'} component={SavedBooks} />
        <Footer />
      </BrowserRouter >
    </>
  );
}


export default App;
