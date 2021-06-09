import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import ReactDatatable from '@ashvin27/react-datatable';
import ModelAddFormation from '../components/ModelAddFormation'
import ModelDeleteDomaine from '../components/ModelDeleteDomaine'
import ModelUpdateFormation from '../components/ModelUpdateFormation'
import FormationService from '../services/FormationService'
import SpecialiteService from '../services/SpecialiteService'
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
class Catalogue_formations extends Component {
    constructor(props) {
        super(props);

    
        

        this.state = {
            formations: [
              
            ],
      
          
            img: '',
            duree:'',
            nom: '',
            prix:'',
            objectif:'',
            niveau:'',
            imgPreview:'', 
            objectArray: [
                { key: 1, cat: "Group 1" },
                { key: 2, cat: "Group 1" },
                { key: 3, cat: "Group 1" },
                { key: 4, cat: "Group 2" },
                { key: 5, cat: "Group 2" },
                { key: 6, cat: "Group 2" },
                { key: 7, cat: "Group 2" }
              ],
              selectedValues: [
           
              ]
         
        }
   
        this.dateDiff = this.dateDiff.bind(this);
    }


   dateDiff(date1, date2){
      var diff = {}                           // Initialisation du retour
      var tmp = date2 - date1;
   
      tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
      diff.sec = tmp % 60;                    // Extraction du nombre de secondes
   
      tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
      diff.min = tmp % 60;                    // Extraction du nombre de minutes
   
      tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
      diff.hour = tmp % 24;                   // Extraction du nombre d'heures
       
      tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
      diff.day = tmp;
       
      return diff;
  }
    componentDidMount() {

        FormationService.getFormations().then((res) => {
          console.log(this.dateDiff(res.data[0].sessions[0].end-res.data[0].sessions[0].start) )
            this.setState({ formations: res.data });
            //this.setState({ duree: dateDiff(new Date(res.data[0].sessions[0].end)-new Date(res.data[0].sessions[0].start)) });
           // console.log(this.state.duree)
       
          
        });
   
     
       
    }
 
 



    render() {
        return (
<div>

 
 
    <div className="section-body" id="page_top">
        <div className="container-fluid">
            <div className="page-header">
                <div className="left">                        
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="What you want to find"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Search</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <ul className="nav nav-pills">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="page-empty.html">Empty page</a>
                                <a className="dropdown-item" href="page-profile.html">Profile</a>
                                <a className="dropdown-item" href="page-search.html">Search Results</a>
                                <a className="dropdown-item" href="page-timeline.html">Timeline</a>
                                <a className="dropdown-item" href="page-invoices.html">Invoices</a>
                                <a className="dropdown-item" href="page-pricing.html">Pricing</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Auth</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="login.html">Login</a>
                                <a className="dropdown-item" href="register.html">Register</a>
                                <a className="dropdown-item" href="forgot-password.html">Forgot password</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="404.html">404 error</a>
                                <a className="dropdown-item" href="500.html">500 error</a>
                            </div>
                        </li>
                    </ul>
                    <div className="notification d-flex">
                        <div className="dropdown d-flex">
                            <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-language"></i></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/us.svg" alt=""/>English</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/es.svg" alt=""/>Spanish</a>
                                <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/jp.svg" alt=""/>japanese</a>
                                <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/bl.svg" alt=""/>France</a>
                            </div>
                        </div>
                        <div className="dropdown d-flex">
                            <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-envelope"></i><span className="badge badge-success nav-unread"></span></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <ul className="right_chat list-unstyled w350 p-0">
                                    <li className="online">
                                        <a href="javascript:void(0);" className="media">
                                            <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt=""/>
                                            <div className="media-body">
                                                <span className="name">Donald Gardner</span>
                                                <div className="message">It is a long established fact that a reader</div>
                                                <small>11 mins ago</small>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="online">
                                        <a href="javascript:void(0);" className="media">
                                            <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt=""/>
                                            <div className="media-body">
                                                <span className="name">Wendy Keen</span>
                                                <div className="message">There are many variations of passages of Lorem Ipsum</div>
                                                <small>18 mins ago</small>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li className="offline">
                                        <a href="javascript:void(0);" className="media">
                                            <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt=""/>
                                            <div className="media-body">
                                                <span className="name">Matt Rosales</span>
                                                <div className="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                                                <small>27 mins ago</small>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    <li className="online">
                                        <a href="javascript:void(0);" className="media">
                                            <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt=""/>
                                            <div className="media-body">
                                                <span className="name">Phillip Smith</span>
                                                <div className="message">It has roots in a piece of classical Latin literature from 45 BC</div>
                                                <small>33 mins ago</small>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>                        
                                </ul>
                                <div className="dropdown-divider"></div>
                                <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                            </div>
                        </div>
                        <div className="dropdown d-flex">
                            <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-bell"></i><span className="badge badge-primary nav-unread"></span></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <ul className="list-unstyled feeds_widget">
                                    <li>
                                        <div className="feeds-left">
                                            <span className="avatar avatar-blue"><i className="fa fa-check"></i></span>
                                        </div>
                                        <div className="feeds-body ml-3">
                                            <p className="text-muted mb-0">Campaign <strong className="text-blue font-weight-bold">Holiday</strong> is nearly reach budget limit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="feeds-left">
                                            <span className="avatar avatar-green"><i className="fa fa-user"></i></span>
                                        </div>
                                        <div className="feeds-body ml-3">
                                            <p className="text-muted mb-0">New admission <strong className="text-green font-weight-bold">32</strong> in computer department.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="feeds-left">
                                            <span className="avatar avatar-red"><i className="fa fa-info"></i></span>
                                        </div>
                                        <div className="feeds-body ml-3">
                                            <p className="text-muted mb-0">6th sem result <strong className="text-red font-weight-bold">67%</strong> in computer department.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="feeds-left">
                                            <span className="avatar avatar-azure"><i className="fa fa-thumbs-o-up"></i></span>
                                        </div>
                                        <div className="feeds-body ml-3">
                                            <p className="text-muted mb-0">New Feedback <strong className="text-azure font-weight-bold">53</strong> for university assessment.</p>
                                        </div>
                                    </li>
                                </ul>
                                <div className="dropdown-divider"></div>
                                <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                            </div>
                        </div>
                        <div className="dropdown d-flex">
                            <a href="javascript:void(0)" className="chip ml-3" data-toggle="dropdown">
                                <span className="avatar" style={{backgroundImage: "url(../assets/images/xs/avatar5.jpg)"}}></span> George</a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <a className="dropdown-item" href="page-profile.html"><i className="dropdown-icon fe fe-user"></i> Profile</a>
                                <a className="dropdown-item" href="app-setting.html"><i className="dropdown-icon fe fe-settings"></i> Settings</a>
                                <a className="dropdown-item" href="app-email.html"><span className="float-right"><span className="badge badge-primary">6</span></span><i className="dropdown-icon fe fe-mail"></i> Inbox</a>
                                <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-send"></i> Message</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-help-circle"></i> Need help?</a>
                                <a className="dropdown-item" href="login.html"><i className="dropdown-icon fe fe-log-out"></i> Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="section-body mt-4">
                    <div className="container-fluid">
                        <div className="tab-content">

                            <div className="tab-pane active" >
                            <div class="card"><div class="card-body"><div class="row">
                              <div class="col-lg-10 col-md-10 col-sm-10"></div>
                              <div class="col-lg-2 col-md-2 col-sm-2">
                               </div></div></div></div>
                     
      <div className="row row-deck">
        {
               this.state.formations.map((
                                                        formation,i) =>(
                                                         
                                                                
                                            
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="card">
        
            <a href="#"><img className="card-img-top" src={"data:image/jpeg;base64,"+formation.img} width={45+'px'} height={45+'px'}   alt="" /></a>
            <div className="card-body d-flex flex-column">
              <h5><a href="courses-details.html">{formation.nom}</a></h5>
              <div className="text-muted">{formation.objectif}</div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-vcenter mb-0">
                <tbody>
                  <tr>
                    <td className="w20"><i className="fa fa-calendar text-blue" /></td>
                    <td className="tx-medium">Durée</td>
                    <td className="text-right">6 Semaines</td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-cc-visa text-danger" /></td>
                    <td className="tx-medium">Prix</td>
                    <td className="text-right">{formation.prix} dt</td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-users text-warning" /></td>
                    <td className="tx-medium">Apprenants</td>
                    <td className="text-right">{ formation.sessions.map((
                                                        session,i) =>(session.nbParticipant))}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer">
           { formation.sessions.map((
                                                        session,i) =>(
              <div className="d-flex align-items-center mt-auto">
                <img className="avatar avatar-md mr-3" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                <div>
                  <a href="#">{Object.values(session.formateur)[1]} {Object.values(session.formateur)[2]}</a>
                 
                </div>
              
              </div>
                                                        ))}
            </div>
          </div>
        </div>
        ))
        }
 

   
      </div>
      </div>
      </div>
      </div>
      </div>
 

  
   





<div className="note-popover popover in note-link-popover bottom"> 
<div className="arrow"></div>  
<div className="popover-content note-children-container">
 <span><a target="_blank"></a>&nbsp;</span>
 <div className="note-btn-group btn-group note-link">
     <button type="button" className="note-btn btn btn-default btn-sm" ><i className="note-icon-link"></i></button>
     <button type="button" className="note-btn btn btn-default btn-sm" ><i className="note-icon-chain-broken"></i></button></div></div></div>
     <div className="note-popover popover in note-image-popover bottom">  <div className="arrow"></div>  <div className="popover-content note-children-container">
         <div className="note-btn-group btn-group note-imagesize">
             <button type="button" className="note-btn btn btn-default btn-sm" ><span className="note-fontsize-10">100%</span></button>
             <button type="button" className="note-btn btn btn-default btn-sm" ><span className="note-fontsize-10">50%</span></button><button type="button" className="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Resize Quarter"><span className="note-fontsize-10">25%</span></button></div><div className="note-btn-group btn-group note-float">
                 <button type="button" className="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Float Left"><i className="note-icon-align-left"></i></button>
                 <button type="button" className="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Float Right"><i className="note-icon-align-right"></i></button>
                 <button type="button" className="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Float None">
         <i className="note-icon-align-justify"></i></button></div>
         <div className="note-btn-group btn-group note-remove">
             <button type="button" className="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Remove Image"><i className="note-icon-trash"></i></button></div></div></div>
             <div className="tooltip fade bs-tooltip-right" role="tooltip" id="tooltip848872" x-placement="right" style={{position:"absolute"}}  ><div className="arrow" ></div><div className="tooltip-inner">Inbox</div></div>
</div>
        )
    }
}

export default Catalogue_formations