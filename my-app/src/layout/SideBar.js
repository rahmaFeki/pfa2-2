import React from 'react';
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
import ListDomaineComponent from '../components/ListeDomaines';
import ListSpecialiteComponent from '../components/ListSpecialites';

function SideBar() {
  return (


    <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">Ericsson<a  className="menu_option float-right"><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="" data-original-title="Grid &amp; List Toggle"></i></a></h5>
        <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#menu-uni"></a></li>
         
        </ul>
        <div className="tab-content mt-3">
        
            <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
                <nav className="sidebar-nav">
                    <ul className="metismenu">
             
                        <li> <NavLink to="/domaines" activeStyle={{ fontWeight: '600' }}><i className="fa fa-book"></i><span>Gestion Domaines</span></NavLink></li>
                        <li ><NavLink to="/specialites" activeStyle={{ fontWeight: '600' }}><i className="fa fa-users"></i><span>Gestion Spécialités </span></NavLink></li>
                        <li><NavLink to="/formateurs" activeStyle={{ fontWeight: '600' }}><i className="fa fa-user-circle-o"></i><span>Gestion Formateurs</span></NavLink></li>
                        <li><NavLink to="/formations" activeStyle={{ fontWeight: '600' }}><i className="fa fa-users"></i><span>Gestion Formations</span></NavLink></li>
                        <li> <NavLink to="/catalogue" activeStyle={{ fontWeight: '600' }}><i className="fa fa-list-ul"></i><span>Catalogue Formations</span></NavLink></li>
              
                    </ul>
                </nav>
               
               
            </div>
         
        </div>
    </div>
  );
}

export default SideBar;