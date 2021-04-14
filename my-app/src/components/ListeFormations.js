import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import ReactDatatable from '@ashvin27/react-datatable';
import ModelAddFormation from '../components/ModelAddFormation'
import ModelDeleteDomaine from '../components/ModelDeleteDomaine'
import ModelUpdateFormation from '../components/ModelUpdateFormation'
import FormationService from '../services/FormationService'
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
class ListeFormations extends Component {
    constructor(props) {
        super(props);

       
        this.columns = [
            {
                key: "nom",
               
                className: "idDomaine",
                align: "left",
                sortable: true,
                cell: record => {
                  
                    return (
                        <Fragment>
     <img src=" " />
                         </Fragment>
                    );
                }
            },
            {
                key: "nom",
                text: "Nom",
                className: "nom",
                align: "left",
                sortable: true,
                cell: record => {
                    return (
                        <Link to={{
                            pathname: '/sessions',
                          
                            state: {sessions: record.sessions,idFormation:record.idFormation}
                          }}> {record.nom} </Link>
                        
                    );
              
                }
            },
            {
                key: "niveau",
                text: "Niveau",
                className: "nom",
                align: "left",
                sortable: true
            },
            
            {
                key: "objectif",
                text: "Objectif",
                className: "nom",
                align: "left",
                sortable: true
            },
            {
                key: "prix",
                text: "Prix",
                className: "nom",
                align: "left",
                sortable: true
            },    
            {
                key: "etat",
                text: "Etat",
                className: "nom",
                align: "left",
                sortable: true
            },
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 100,
                align: "left",
                sortable: false,
                cell: record => {
                  
                    return (
                        <Fragment>
                           
                            <ModelUpdateFormation
                                updatedIdFormation={record.idFormation} 
                                updatedNom={record.nom}
                                updatedImg=''
                                updatedObjectif={record.objectif}
                                updatedNiveau={record.niveau}
                                updatedEtat={record.etat}
                                updatedPrix={record.prix}
                                handleUpdate={this.handleUpdate}
                                
                             
                                />

                            <ModelDeleteDomaine id={record.idDomaine} deleteDomaine={this.deleteDomaine} />

                        </Fragment>
                    );
                }
            }
        ];
        this.config = {
            page_size: 5,
            length_menu: [10, 20, 50],
            button: {
                excel: false,
                print: false,
                extra: false,
            },
            language: {
                length_menu: "",
                filter: "Rechercher ...",
                info: "Total _TOTAL_ entrées",
                pagination: {
                    first: "Premier",
                    previous: "pre",
                    next: "suiv",
                    last: "dernier"
                }
            }
        }

        this.state = {
            formations: [
              
            ],
            img: '',
            nom: '',
            prix:'',
            objectif:'',
            niveau:'',
            imgPreview:''
         
        }
        this.extraButtons = [

        ];
        this.saveFormation = this.saveFormation.bind(this);
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changeNiveauHandler = this.changeNiveauHandler.bind(this);
        this.changeObjectifHandler = this.changeObjectifHandler.bind(this);
        this.changePrixHandler = this.changePrixHandler.bind(this);
        this.changeImgHandler = this.changeImgHandler.bind(this);
        this.deleteFormation = this.deleteFormation.bind(this);
    }

    deleteFormation(idDomaine) {
       
        FormationService.deleteFormation(idDomaine).then(res => {
            this.setState({ domaines: this.state.domaines.filter(domaine => domaine.idDomaine !== idDomaine) });
        });
  
    }
    handleUpdate = (updatedDomaine) =>{
        this.setState({ domaines:   this.state.domaines .map(domaine => {
            if(domaine.idDomaine==updatedDomaine.idDomaine)
                return {nom:updatedDomaine.nom,idDomaine:domaine.idDomaine}
            return domaine
        })
    }) 
      
    }


    componentDidMount() {

        FormationService.getFormations().then((res) => {
            console.log(res)
            this.setState({ formations: res.data });
        
          
        });
       
    }
    handleUpdate = (updatedFormation) =>{
        this.setState({ formations:   this.state.formations .map(formation => {
            if(formation.idFormation==updatedFormation.idFormation)
                return {nom:updatedFormation.nom,idFormation:formation.idFormation,objectif:updatedFormation.objectif,niveau:updatedFormation.niveau,prix:updatedFormation.prix,etat:updatedFormation.etat}
            return formation
        })
    }) 
      
    }
     saveFormation = () => {
        let formData = new FormData();

        formData.append('img', this.state.img);
        formData.append('idFormation', this.state.idFormation);
        formData.append('nom', this.state.nom);
        formData.append('objectif', this.state.objectif);
        formData.append('niveau', this.state.niveau);
        formData.append('prix', this.state.prix);
      
        //e.preventDefault();
       /* let formation = {idFormation:
            (this.state.formations.length==0)?0:this.state.formations[this.state.formations.length-1].idFormation+1,nom: this.state.nom, objectif:this.state.objectif,niveau:this.state.niveau,prix:this.state.prix,img:this.state.img };
        console.log('formation=> ' + JSON.stringify(formation));*/

        FormationService.createFormation(formData).then(res => {
          console.log(formData)
          // this.state.domaines.push(domaine)
          this.setState({formations : [...this.state.formations,res.data]});     
          
        });

    }

    changeNomHandler = (event) => {
        this.setState({ nom: event.target.value });
    }

    changeNiveauHandler = (event) => {
        this.setState({ niveau: event.target.value });
    }
    changePrixHandler = (event) => {
        this.setState({ prix: event.target.value });
    }

    changeObjectifHandler = (event) => {
        this.setState({ objectif: event.target.value });
    }
    changeImgHandler = (event) => {
        this.setState({ img: event.target.files[0] });
    }

    render() {
        return (
            <div>




                <div className="section-body" id="page_top">
                    <div className="container-fluid">
                        <div className="page-header">
                            <div className="left">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="What you want to find" />
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
                                            <a className="dropdown-item" >Empty page</a>
                                            <a className="dropdown-item" >Profile</a>
                                            <a className="dropdown-item" >Search Results</a>
                                            <a className="dropdown-item" >Timeline</a>
                                            <a className="dropdown-item" >Invoices</a>
                                            <a className="dropdown-item" >Pricing</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Auth</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" >Login</a>
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
                                            <a className="dropdown-item" ><img className="w20 mr-2" src="../assets/images/flags/us.svg" alt="" />English</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" ><img className="w20 mr-2" src="../assets/images/flags/es.svg" alt="" />Spanish</a>
                                            <a className="dropdown-item" ><img className="w20 mr-2" src="../assets/images/flags/jp.svg" alt="" />japanese</a>
                                            <a className="dropdown-item" ><img className="w20 mr-2" src="../assets/images/flags/bl.svg" alt="" />France</a>
                                        </div>
                                    </div>
                                    <div className="dropdown d-flex">
                                        <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-envelope"></i><span className="badge badge-success nav-unread"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <ul className="right_chat list-unstyled w350 p-0">
                                                <li className="online">
                                                    <a href="" className="media">
                                                        <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="" />
                                                        <div className="media-body">
                                                            <span className="nom">Donald Gardner</span>
                                                            <div className="message">It is a long established fact that a reader</div>
                                                            <small>11 mins ago</small>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="online">
                                                    <a className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                                                        <div className="media-body">
                                                            <span className="nom">Wendy Keen</span>
                                                            <div className="message">There are many variations of passages of Lorem Ipsum</div>
                                                            <small>18 mins ago</small>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="offline">
                                                    <a className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                                                        <div className="media-body">
                                                            <span className="nom">Matt Rosales</span>
                                                            <div className="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                                                            <small>27 mins ago</small>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="online">
                                                    <a className="media">
                                                        <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="" />
                                                        <div className="media-body">
                                                            <span className="nom">Phillip Smith</span>
                                                            <div className="message">It has roots in a piece of classical Latin literature from 45 BC</div>
                                                            <small>33 mins ago</small>
                                                            <span className="badge badge-outline status"></span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
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
                                            <span className="avatar" style={{ backgroundImage: "url(../assets/images/xs/avatar5.jpg)" }}></span> George</a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a className="dropdown-item" ><i className="dropdown-icon fe fe-user"></i> Profile</a>
                                            <a className="dropdown-item" ><i className="dropdown-icon fe fe-settings"></i> Settings</a>
                                            <a className="dropdown-item" ><span className="float-right"><span className="badge badge-primary">6</span></span><i className="dropdown-icon fe fe-mail"></i> Inbox</a>
                                            <a className="dropdown-item" ><i className="dropdown-icon fe fe-send"></i> Message</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" ><i className="dropdown-icon fe fe-help-circle"></i> Need help?</a>
                                            <a className="dropdown-item" ><i className="dropdown-icon fe fe-log-out"></i> Sign out</a>
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

                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">

                                            <div className="col-lg-10 col-md-10 col-sm-10">

                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2">
                                                <ModelAddFormation nom={this.state.nom}
                                                     saveFormation={this.saveFormation} changeHandlerNom={this.changeNomHandler}
                                                    changeHandlerObjectif={this.changeObjectifHandler}  changeHandlerNiveau={this.changeNiveauHandler}   changeHandlerPrix={this.changePrixHandler}
                                                    changeHandlerImg={this.changeImgHandler}  />

                                            </div>

                                        </div>
                                    </div>

                                </div>


                                <div className=" card">
                                <div className="card-body">
                              
                          
                                  <div class="row">
                                  <div class="col-sm-12">
                                    <ReactDatatable
                                        className="table table-hover table-vcenter table-striped  text-nowrap "
                                        tHeadClassName="dataTableD"
                                        config={this.config}
                                        records={this.state.formations}
                                        columns={this.columns}

                                    />
                                  
                                  
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            <div>
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
                        <button type="button" className="note-btn btn btn-default btn-sm" ><span className="note-fontsize-10">50%</span></button><button type="button" className="note-btn btn btn-default btn-sm" title="" data-original-title="Resize Quarter"><span className="note-fontsize-10">25%</span></button></div><div className="note-btn-group btn-group note-float">
                        <button type="button" className="note-btn btn btn-default btn-sm" title="" data-original-title="Float Left"><i className="note-icon-align-left"></i></button>
                        <button type="button" className="note-btn btn btn-default btn-sm" title="" data-original-title="Float Right"><i className="note-icon-align-right"></i></button>
                        <button type="button" className="note-btn btn btn-default btn-sm" title="" data-original-title="Float None">
                            <i className="note-icon-align-justify"></i></button></div>
                    <div className="note-btn-group btn-group note-remove">
                        <button type="button" className="note-btn btn btn-default btn-sm" title="" data-original-title="Remove Image"><i className="note-icon-trash"></i></button></div></div></div>
                <div className="tooltip fade bs-tooltip-right" role="tooltip" id="tooltip848872" x-placement="right" style={{ position: "absolute" }}  ><div className="arrow" ></div><div className="tooltip-inner">Inbox</div></div>
            </div>

        )
    }
}
export default ListeFormations