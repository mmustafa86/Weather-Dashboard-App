import React ,{Fragment}from 'react'
import 'semantic-ui-css/semantic.min.css'
import Home from './components/pages/Home'
import Footer from './components/layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Fragment>
    <Router>
    <div className="App">
 <Home/>
    </div>
    </Router>
    <Footer/>
    </Fragment>
  );
}

export default App;
