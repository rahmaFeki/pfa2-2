import React from 'react';
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
import ListDomaineComponent from '../components/ListeDomaines';
import ListSpecialiteComponent from '../components/ListSpecialites';

function SideBar() {
  return (


    <div id="left-sidebar" className="sidebar">
        <h5 className="brand-name">Ericsson<a  className="menu_option float-right"><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="" data-original-title="Grid &amp; List Toggle"></i></a></h5>
        <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#menu-uni">University</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu-admin">Admin</a></li>
        </ul>
        <div className="tab-content mt-3">
        
            <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
                <nav className="sidebar-nav">
                    <ul className="metismenu">
                        <li><a href="index.html"><i className="fa fa-dashboard"></i><span>Tableau De Bord</span></a></li>
                        <li> <NavLink to="/domaines" activeStyle={{ fontWeight: '600' }}><i className="fa fa-book"></i><span>Gestion Domaines</span></NavLink></li>
                        <li ><NavLink to="/specialites" activeStyle={{ fontWeight: '600' }}><i className="fa fa-users"></i><span>Gestion Spécialités </span></NavLink></li>
                        <li><NavLink to="/formateurs" activeStyle={{ fontWeight: '600' }}><i className="fa fa-user-circle-o"></i><span>Gestion Formateurs</span></NavLink></li>
                        <li><NavLink to="/formations" activeStyle={{ fontWeight: '600' }}><i className="fa fa-users"></i><span>Gestion Formations</span></NavLink></li>
          
              
                    </ul>
                </nav>
               
               
            </div>
          
            <div className="tab-pane fade" id="menu-admin" role="tabpanel">
                <nav className="sidebar-nav">
                    <ul className="metismenu">
                        <li><a href="payments.html"><i className="fa fa-credit-card"></i><span>Payments</span></a></li>
                        <li><a href="noticeboard.html"><i className="fa fa-dashboard"></i><span>Noticeboard</span></a></li>
                        <li><a href="taskboard.html"><i className="fa fa-list-ul"></i><span>Taskboard</span></a></li>
                        <li><a href="hostel.html"><i className="fa fa-bed"></i><span>Hostel</span></a></li>
                        <li><a href="transport.html"><i className="fa fa-truck"></i><span>Transport</span></a></li>
                        <li><a href="attendance.html"><i className="fa fa-calendar-check-o"></i><span>Attendance</span></a></li>
                        <li><a href="leave.html"><i className="fa fa-flag"></i><span>Leave</span></a></li>
                        <li><a href="setting.html"><i className="fa fa-gear"></i><span>Settings</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  );
}

export default SideBar;
