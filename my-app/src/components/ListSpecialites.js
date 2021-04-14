import React, { Component, Fragment } from 'react'
import SpecialiteService from '../services/SpecialiteService'
import ReactDatatable from '@ashvin27/react-datatable';
import DomaineService from '../services/DomaineService'
import ModelAddSpec from './ModelAddSpec';
import ModelUpdateSpec from './ModelUpdateSpec';
import ModelDeleteSpecialite from './ModelDeleteSpecialite';
class ListSpecialiteComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Specialites: [],
            domaines: [],
            idDomaine: '',
            libelle: '',
            updatedLibelle: '',
            updatedIdDomaine: ''
        }
        this.columns = [
            {
                key: "idSpecialite",
                text: "Identifiant",
                className: "idSpecialite",
                align: "left",
                sortable: true,
            },
            {
                key: "libelle",
                text: "Libelle",
                className: "libelle",
                align: "left",
                sortable: true
            },
            {
                key: "nom",
                text: "Domaine",
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
                          
                            <ModelUpdateSpec domaines={this.state.domaines} updatedLibelle={record.libelle} idSpecialite={record.idSpecialite} 
                         updatedDomaine={ record.idDomaine} handleUpdate={this.handleUpdate}
                           />

                            <ModelDeleteSpecialite id={record.idSpecialite} deleteSpecialite={this.deleteSpecialite} />

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

        this.saveSpecialite = this.saveSpecialite.bind(this);
        this.deleteSpecialite = this.deleteSpecialite.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.changeDomaineHandler = this.changeDomaineHandler.bind(this);
        this.changeLibelleHandlerUpdate = this.changeLibelleHandlerUpdate.bind(this);
        this.changeNameHandlerUpdate = this.changeNameHandlerUpdate.bind(this);
    }

    deleteSpecialite(id) {
        SpecialiteService.deleteSpecialite(id).then(res => {
            this.setState({ Specialites: this.state.Specialites.filter(Specialite => Specialite.idSpecialite !== id) });
        });
    }



    componentDidMount() {
        var specials=[]
        SpecialiteService.getSpecialites().then((res) => {
            res.data.map(spec=>specials.push({'idSpecialite':spec.idSpecialite,'libelle':spec.libelle,'idDomaine':Object.values(spec.domaine)[0],'nom':Object.values(spec.domaine)[1]}))
            console.log(specials);
            this.setState({ Specialites: specials });
           // console.log(this.state.Specialit);
        });
        DomaineService.getDomaines().then((res) => {
            this.setState({ domaines:res.data });
          
        }); 
      
        
    }
    handleUpdate = (updatedSpec) =>{
        this.setState({ Specialites:   this.state.Specialites .map(spec => {
            if(spec.idSpecialite==updatedSpec.idSpecialite)
                return {libelle:updatedSpec.libelle,idSpecialite:spec.idSpecialite,domaine:updatedSpec.domaine}
            return spec
        })
    }) 
     console.log(this.state.domaines)   
    }

    saveSpecialite() {
        //this.props.history.push('/add-Specialite/_add');
        let specialite = { idSpecialite: (this.state.Specialites.length==0)?0:this.state.Specialites[this.state.Specialites.length-1].idSpecialite+1 , libelle: this.state.libelle, domaine: { idDomaine: this.state.idDomaine } };
    
        SpecialiteService.createSpecialite(specialite).then(res => {
          console.log(res.data)
            this.setState({Specialites : [...this.state.Specialites, {'idSpecialite':res.data.idSpecialite,'libelle':res.data.libelle,'idDomaine':Object.values(res.data.domaine)[0],'nom':Object.values(res.data.domaine)[1]}]});  
        });
    }
    changeLibelleHandler = (event) => {
        this.setState({ libelle: event.target.value });
    }

    changeDomaineHandler = (event) => {
        this.setState({ idDomaine: event.target.value });
    }
    changeLibelleHandlerUpdate = (event,id) => {
        
      //  this.setState({ updatedIdDomaine: event.target.value });
       this.state.Specialites.filter(specialite => specialite.idSpecialite === id).map(filteredSpec => (
    
        filteredSpec.libelle=event.target.value
         ))
    }

    changeNameHandlerUpdate = (event,id) => {
      //  this.setState({ updatedIdDomaine: event.target.value });
       this.state.Specialites.filter(specialite => specialite.idSpecialite === id).map(filteredSpec => (
    
         filteredSpec['domaine']['idDomaine']=event.target.value
          ))
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
                                                <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/us.svg" alt="" />English</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/es.svg" alt="" />Spanish</a>
                                                <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/jp.svg" alt="" />japanese</a>
                                                <a className="dropdown-item" href="#"><img className="w20 mr-2" src="../assets/images/flags/bl.svg" alt="" />France</a>
                                            </div>
                                        </div>
                                        <div className="dropdown d-flex">
                                            <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-envelope"></i><span className="badge badge-success nav-unread"></span></a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <ul className="right_chat list-unstyled w350 p-0">
                                                    <li className="online">
                                                        <a  className="media">
                                                            <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="" />
                                                            <div className="media-body">
                                                                <span className="name">Donald Gardner</span>
                                                                <div className="message">It is a long established fact that a reader</div>
                                                                <small>11 mins ago</small>
                                                                <span className="badge badge-outline status"></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="online">
                                                        <a  className="media">
                                                            <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                                                            <div className="media-body">
                                                                <span className="name">Wendy Keen</span>
                                                                <div className="message">There are many variations of passages of Lorem Ipsum</div>
                                                                <small>18 mins ago</small>
                                                                <span className="badge badge-outline status"></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="offline">
                                                        <a  className="media">
                                                            <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                                                            <div className="media-body">
                                                                <span className="name">Matt Rosales</span>
                                                                <div className="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                                                                <small>27 mins ago</small>
                                                                <span className="badge badge-outline status"></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="online">
                                                        <a  className="media">
                                                            <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="" />
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
                                                <span className="avatar" style={{ backgroundImage: "url(../assets/images/xs/avatar5.jpg)" }}></span> George</a>
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
                                <div className="tab-pane active" id="Student-all">

                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">

                                                <div className="col-lg-10 col-md-8 col-sm-8">

                                                </div>

                                                <div className="col-lg-2 col-md-4 col-sm-4">
                                                    <ModelAddSpec domaines={this.state.domaines} libelle={this.state.libelle}
                                                        name={this.state.idDomaine} addSpecialite={this.saveSpecialite} changeHandlerLibelle={this.changeLibelleHandler}
                                                        changeHandlerDomaine={this.changeDomaineHandler} />
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
                                        records={this.state.Specialites}
                                        columns={this.columns}

                                    />
                                  
                                  
                                </div>
                                </div>
                                </div>
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
                            <button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Edit"><i className="note-icon-link"></i></button>
                            <button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Unlink"><i className="note-icon-chain-broken"></i></button></div></div></div>
                <div className="note-popover popover in note-image-popover bottom">  <div className="arrow"></div>  <div className="popover-content note-children-container">
                    <div className="note-btn-group btn-group note-imagesize">
                        <button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Resize Full"><span className="note-fontsize-10">100%</span></button>
                        <button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Resize Half"><span className="note-fontsize-10">50%</span></button><button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Resize Quarter"><span className="note-fontsize-10">25%</span></button></div><div className="note-btn-group btn-group note-float">
                        <button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Float Left"><i className="note-icon-align-left"></i></button>
                        <button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Float Right"><i className="note-icon-align-right"></i></button>
                        <button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Float None">
                            <i className="note-icon-align-justify"></i></button></div>
                    <div className="note-btn-group btn-group note-remove">
                        <button type="button" className="note-btn btn btn-default btn-sm"  title="" data-original-title="Remove Image"><i className="note-icon-trash"></i></button></div></div></div>
                <div className="tooltip fade bs-tooltip-right" role="tooltip" id="tooltip848872" x-placement="right" style={{ position: "absolute" }}  ><div className="arrow" ></div><div className="tooltip-inner">Inbox</div></div>
            </div>
        )
    }
}

export default ListSpecialiteComponent