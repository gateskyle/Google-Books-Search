import React from "react";
import NavBar from './components/Navbar'
import HeaderSearchBar from './components/HeaderSearchBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
        <HeaderSearchBar />
    </>
  );
}


export default App;
