import React from "react";
import Navbar from './components/Navbar';
import HeaderSearchBar from './components/HeaderSearchBar';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeaderSearchBar />
      <Footer />
    </>
  );
}


export default App;
