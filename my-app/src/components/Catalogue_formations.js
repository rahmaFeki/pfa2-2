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
        if(localStorage.getItem('currentUser')){
        FormationService.getFormations().then((res) => {
          console.log(res.data.img )
            this.setState({ formations: res.data });
            this.state.formations.map((
              formation,i) =>(
                console.log(formation.img ) 
              ))
    
       
          
        });
   
    }
    else
    this.props.history.push('/login') 
       
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
                
                    <div className="notification d-flex">
            
                        <div className="dropdown d-flex">
                            <a href="javascript:void(0)" className="chip ml-3" data-toggle="dropdown">
                                <span className="avatar" style={{backgroundImage: "url(../assets/images/cha.png)"}}></span> {JSON.parse(localStorage.getItem("currentUser"))["nom"]+" "+JSON.parse(localStorage.getItem("currentUser"))["prenom"]}</a>
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
                              <div class="col-lg-10 col-md-10 col-sm-10"><h4>Catalogue Des Formations</h4></div>
                              <div class="col-lg-2 col-md-2 col-sm-2">
                               </div></div></div></div>
                     
      <div className="row row-deck">
        {
               this.state.formations.map((
                                                        formation,i) =>(
                                                         
                                                                
                                            
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="card">
        
            <a href="#"><img className="card-img-top" src={"data:image/jpeg;base64,"+formation.img} width="4%" height="70%" alt="" /></a>
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
                    <td className="text-right">{ formation.sessions.length} session(s)</td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-cc-visa text-danger" /></td>
                    <td className="tx-medium">Prix</td>
                    <td className="text-right">{formation.prix} dt</td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-dashboard text-danger" /></td>
                    <td className="tx-medium">Niveau</td>
                    <td className="text-right">{formation.niveau} </td>
                  </tr>
                  <tr>
                    <td><i className="fa fa-users text-warning" /></td>
                    <td className="tx-medium">Spécialites</td>
                    <td className="text-right">{ formation.specialites.map((
                                                        spec,i) =>(spec.libelle)+", ")}</td>
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