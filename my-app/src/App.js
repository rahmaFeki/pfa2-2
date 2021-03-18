import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './layout/NavBar.js';
import Footer from './layout/Footer.js';
import ListDomaineComponent from './components/ListeDomaines.js';
import ListSpecialiteComponent from './components/ListSpecialites.js';
import ListFormateur from './components/ListeFormateurs.js';
import CreateDomaine from './components/CreateDomaine.js';
import CalendrierDispo from './components/CalendrierDispo.js';
import LeftSideBar from './layout/SideBar';
function App() {
  return (
  <div>
    <div className="page-loader-wrapper" style={{display: "none"}}>
    <div className="loader">
    </div>
</div>
<Router>
    <div   id="main_content">
<div className="page">
    <NavBar />
    <LeftSideBar />
    <Switch> 
    <Route path = "/"  exact component = {ListDomaineComponent}></Route>
    <Route path = "/disponibilites/:id"  component = {CalendrierDispo}></Route>
                          <Route path = "/domaines"  component = {ListDomaineComponent}></Route>
                          <Route path = "/formateurs"  component = {ListFormateur}></Route>
                          <Route path = "/add-domaine" component = {CreateDomaine}></Route>
                          <Route path = "/specialites" component = {ListSpecialiteComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
    <Footer />
    </div>
    </div>
    </Router>
    </div>
  );
}

export default App;
