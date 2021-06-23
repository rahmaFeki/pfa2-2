import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './layout/NavBar.js';
import Footer from './layout/Footer.js';
import ListDomaineComponent from './components/ListeDomaines.js';
import ListSpecialiteComponent from './components/ListSpecialites.js';
import FormateurSpecialite from './components/FormateurSpecialite.js';
import ListFormateur from './components/ListeFormateurs.js';
import ListeFormations from './components/ListeFormations.js';
import CalendrierDispo from './components/CalendrierDispo.js';
import CalendrierSession from './components/CalendrierSession.js';
import Catalogue_formations from './components/Catalogue_formations.js';

import LeftSideBar from './layout/SideBar';
import authentification from './components/authentification.js';
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
    <Route path = "/disponiblites"  component = {CalendrierDispo}></Route>
 
    <Route path = "/sessions"  component = {CalendrierSession}></Route>
                          <Route path = "/domaines"  component = {ListDomaineComponent}></Route>
                          <Route path = "/specialites"  component = {ListSpecialiteComponent}></Route>
                          <Route path = "/login"  component = {authentification}></Route>
                          <Route path = "/formateurs"  component = {ListFormateur}></Route>
                          <Route path = "/specialites_formateur"  component = {FormateurSpecialite}></Route>
                          <Route path = "/specialites_formateur"  component = {FormateurSpecialite}></Route>
                          <Route path = "/catalogue" component = {Catalogue_formations}></Route>
                          <Route path = "/formations" component = {ListeFormations}></Route>
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