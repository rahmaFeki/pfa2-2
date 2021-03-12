import React, { Component } from 'react'
import DomaineService from '../services/DomaineService'
import ModelAddDomaine from '../components/ModelAddDomaine'
import ModelUpdateDomaine from '../components/ModelUpdateDomaine'
class ListDomaineComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            domaines: [],
            idDomaine: '',
            nom: '',
            updatedId: '',
            updatedLibelle: ''

        }
        this.saveDomaine = this.saveDomaine.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeLibelleHandlerUpdate = this.changeLibelleHandlerUpdate.bind(this);
        this.changeIdHandlerUpdate = this.changeIdHandlerUpdate.bind(this);

        this.deleteDomaine = this.deleteDomaine.bind(this);
    }

    deleteDomaine(idDomaine) {
        DomaineService.deleteDomaine(idDomaine).then(res => {
            this.setState({ domaines: this.state.domaines.filter(domaine => domaine.idDomaine !== idDomaine) });
        });
    }
    viewDomaine(idDomaine) {
        this.props.history.push(`/view-domaine/${idDomaine}`);
    }


    componentDidMount() {
        DomaineService.getDomaines().then((res) => {
            this.setState({ domaines: res.data });
            console.log(res.data);
        });
    }

    saveDomaine = () => {
        //e.preventDefault();
        let domaine = { nom: this.state.nom };
        console.log('domaine => ' + JSON.stringify(domaine));

        DomaineService.createDomaine(domaine).then(res => {
            this.props.history.push('/domaines');
        });

    }

    changeLibelleHandler = (event) => {
        this.setState({ nom: event.target.value });
    }

    changeIdHandler = (event) => {
        this.setState({ idDomaine: event.target.value });
    }
    changeLibelleHandlerUpdate = (event) => {
        this.setState({ updatedLibelle: event.target.value });
    }

    changeIdHandlerUpdate = (event) => {
        this.setState({ updatedId: event.target.value });
    }

    render() {
        return (
            <div>


                <div classnom="page">

                    <div classnom="section-body" idDomaine="page_top">
                        <div classnom="container-fluid">
                            <div classnom="page-header">
                                <div classnom="left">
                                    <div classnom="input-group">
                                        <input type="text" classnom="form-control" placeholder="What you want to find" />
                                        <div classnom="input-group-append">
                                            <button classnom="btn btn-outline-secondary" type="button">Search</button>
                                        </div>
                                    </div>
                                </div>
                                <div classnom="right">
                                    <ul classnom="nav nav-pills">
                                        <li classnom="nav-item dropdown">
                                            <a classnom="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <div classnom="dropdown-menu">
                                                <a classnom="dropdown-item" href="page-empty.html">Empty page</a>
                                                <a classnom="dropdown-item" href="page-profile.html">Profile</a>
                                                <a classnom="dropdown-item" href="page-search.html">Search Results</a>
                                                <a classnom="dropdown-item" href="page-timeline.html">Timeline</a>
                                                <a classnom="dropdown-item" href="page-invoices.html">Invoices</a>
                                                <a classnom="dropdown-item" href="page-pricing.html">Pricing</a>
                                            </div>
                                        </li>
                                        <li classnom="nav-item dropdown">
                                            <a classnom="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Auth</a>
                                            <div classnom="dropdown-menu">
                                                <a classnom="dropdown-item" href="login.html">Login</a>
                                                <a classnom="dropdown-item" href="register.html">Register</a>
                                                <a classnom="dropdown-item" href="forgot-password.html">Forgot password</a>
                                                <div classnom="dropdown-divider"></div>
                                                <a classnom="dropdown-item" href="404.html">404 error</a>
                                                <a classnom="dropdown-item" href="500.html">500 error</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div classnom="notification d-flex">
                                        <div classnom="dropdown d-flex">
                                            <a classnom="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i classnom="fa fa-language"></i></a>
                                            <div classnom="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a classnom="dropdown-item" href="#"><img classnom="w20 mr-2" src="../assets/images/flags/us.svg" alt="" />English</a>
                                                <div classnom="dropdown-divider"></div>
                                                <a classnom="dropdown-item" href="#"><img classnom="w20 mr-2" src="../assets/images/flags/es.svg" alt="" />Spanish</a>
                                                <a classnom="dropdown-item" href="#"><img classnom="w20 mr-2" src="../assets/images/flags/jp.svg" alt="" />japanese</a>
                                                <a classnom="dropdown-item" href="#"><img classnom="w20 mr-2" src="../assets/images/flags/bl.svg" alt="" />France</a>
                                            </div>
                                        </div>
                                        <div classnom="dropdown d-flex">
                                            <a classnom="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i classnom="fa fa-envelope"></i><span classnom="badge badge-success nav-unread"></span></a>
                                            <div classnom="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <ul classnom="right_chat list-unstyled w350 p-0">
                                                    <li classnom="online">
                                                        <a href="javascript:void(0);" classnom="media">
                                                            <img classnom="media-object" src="../assets/images/xs/avatar4.jpg" alt="" />
                                                            <div classnom="media-body">
                                                                <span classnom="nom">Donald Gardner</span>
                                                                <div classnom="message">It is a long established fact that a reader</div>
                                                                <small>11 mins ago</small>
                                                                <span classnom="badge badge-outline status"></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li classnom="online">
                                                        <a href="javascript:void(0);" classnom="media">
                                                            <img classnom="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                                                            <div classnom="media-body">
                                                                <span classnom="nom">Wendy Keen</span>
                                                                <div classnom="message">There are many variations of passages of Lorem Ipsum</div>
                                                                <small>18 mins ago</small>
                                                                <span classnom="badge badge-outline status"></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li classnom="offline">
                                                        <a href="javascript:void(0);" classnom="media">
                                                            <img classnom="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                                                            <div classnom="media-body">
                                                                <span classnom="nom">Matt Rosales</span>
                                                                <div classnom="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                                                                <small>27 mins ago</small>
                                                                <span classnom="badge badge-outline status"></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li classnom="online">
                                                        <a href="javascript:void(0);" classnom="media">
                                                            <img classnom="media-object " src="../assets/images/xs/avatar3.jpg" alt="" />
                                                            <div classnom="media-body">
                                                                <span classnom="nom">Phillip Smith</span>
                                                                <div classnom="message">It has roots in a piece of classical Latin literature from 45 BC</div>
                                                                <small>33 mins ago</small>
                                                                <span classnom="badge badge-outline status"></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div classnom="dropdown-divider"></div>
                                                <a href="javascript:void(0)" classnom="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                                            </div>
                                        </div>
                                        <div classnom="dropdown d-flex">
                                            <a classnom="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i classnom="fa fa-bell"></i><span classnom="badge badge-primary nav-unread"></span></a>
                                            <div classnom="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <ul classnom="list-unstyled feeds_widget">
                                                    <li>
                                                        <div classnom="feeds-left">
                                                            <span classnom="avatar avatar-blue"><i classnom="fa fa-check"></i></span>
                                                        </div>
                                                        <div classnom="feeds-body ml-3">
                                                            <p classnom="text-muted mb-0">Campaign <strong classnom="text-blue font-weight-bold">Holiday</strong> is nearly reach budget limit.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div classnom="feeds-left">
                                                            <span classnom="avatar avatar-green"><i classnom="fa fa-user"></i></span>
                                                        </div>
                                                        <div classnom="feeds-body ml-3">
                                                            <p classnom="text-muted mb-0">New admission <strong classnom="text-green font-weight-bold">32</strong> in computer department.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div classnom="feeds-left">
                                                            <span classnom="avatar avatar-red"><i classnom="fa fa-info"></i></span>
                                                        </div>
                                                        <div classnom="feeds-body ml-3">
                                                            <p classnom="text-muted mb-0">6th sem result <strong classnom="text-red font-weight-bold">67%</strong> in computer department.</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div classnom="feeds-left">
                                                            <span classnom="avatar avatar-azure"><i classnom="fa fa-thumbs-o-up"></i></span>
                                                        </div>
                                                        <div classnom="feeds-body ml-3">
                                                            <p classnom="text-muted mb-0">New Feedback <strong classnom="text-azure font-weight-bold">53</strong> for university assessment.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div classnom="dropdown-divider"></div>
                                                <a href="javascript:void(0)" classnom="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                                            </div>
                                        </div>
                                        <div classnom="dropdown d-flex">
                                            <a href="javascript:void(0)" classnom="chip ml-3" data-toggle="dropdown">
                                                <span classnom="avatar" style={{ backgroundImage: "url(../assets/images/xs/avatar5.jpg)" }}></span> George</a>
                                            <div classnom="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a classnom="dropdown-item" href="page-profile.html"><i classnom="dropdown-icon fe fe-user"></i> Profile</a>
                                                <a classnom="dropdown-item" href="app-setting.html"><i classnom="dropdown-icon fe fe-settings"></i> Settings</a>
                                                <a classnom="dropdown-item" href="app-email.html"><span classnom="float-right"><span classnom="badge badge-primary">6</span></span><i classnom="dropdown-icon fe fe-mail"></i> Inbox</a>
                                                <a classnom="dropdown-item" href="javascript:void(0)"><i classnom="dropdown-icon fe fe-send"></i> Message</a>
                                                <div classnom="dropdown-divider"></div>
                                                <a classnom="dropdown-item" href="javascript:void(0)"><i classnom="dropdown-icon fe fe-help-circle"></i> Need help?</a>
                                                <a classnom="dropdown-item" href="login.html"><i classnom="dropdown-icon fe fe-log-out"></i> Sign out</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div classnom="section-body mt-4">
                        <div classnom="container-fluid">
                            <div classnom="tab-content">

                                <div classnom="tab-pane active" idDomaine="gestion-domaine">

                                    <div classnom="card">
                                        <div classnom="card-body">
                                            <div classnom="row">

                                                <div classnom="col-lg-10 col-md-10 col-sm-10">

                                                </div>
                                                <div classnom="col-lg-2 col-md-2 col-sm-2">
                                                    <ModelAddDomaine nom={this.state.nom}
                                                        idDomaine={this.state.idDomaine} addDomaine={this.saveDomaine} changeHandlerId={this.changeIdHandler}
                                                        changeHandlerLibelle={this.changeLibelleHandler} />

                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div classnom="table-responsive card">
                                        <table classnom="table table-hover table-vcenter table-striped mb-0 text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "50%" }}>idDomaine</th>
                                                    <th style={{ width: "80%" }}>Libellé</th>

                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {
                                                    this.state.domaines.map(
                                                        domaine =>
                                                            <tr key={domaine.idDomaine}>
                                                                <td> {domaine.idDomaine} </td>
                                                                <td> {domaine.nom} </td>

                                                                <td>
                                                                    <button type="button" classnom="btn btn-icon btn-sm" title="View" ><i classnom="fa fa-eye"></i></button>
                                                                    <ModelUpdateDomaine updatedLibelle={this.state.updatedLibelle}
                                                                        updatedId={this.state.updatedId} changeHandlerIdUpdate={this.changeIdHandlerUpdate}
                                                                        changeHandlerLibelleUpdate={this.changeLibelleHandlerUpdate} />
                                                                    <button type="button" classnom="btn btn-icon btn-sm js-sweetalert" title="Delete" data-type="confirm" onClick={() => this.deleteDomaine(domaine.idDomaine)} ><i classnom="fa fa-trash-o text-danger"></i></button>
                                                                </td>
                                                            </tr>
                                                    )
                                                }




                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>





                <div classnom="note-popover popover in note-link-popover bottom">
                    <div classnom="arrow"></div>
                    <div classnom="popover-content note-children-container">
                        <span><a target="_blank"></a>&nbsp;</span>
                        <div classnom="note-btn-group btn-group note-link">
                            <button type="button" classnom="note-btn btn btn-default btn-sm" ><i classnom="note-icon-link"></i></button>
                            <button type="button" classnom="note-btn btn btn-default btn-sm" ><i classnom="note-icon-chain-broken"></i></button></div></div></div>
                <div classnom="note-popover popover in note-image-popover bottom">  <div classnom="arrow"></div>  <div classnom="popover-content note-children-container">
                    <div classnom="note-btn-group btn-group note-imagesize">
                        <button type="button" classnom="note-btn btn btn-default btn-sm" ><span classnom="note-fontsize-10">100%</span></button>
                        <button type="button" classnom="note-btn btn btn-default btn-sm" ><span classnom="note-fontsize-10">50%</span></button><button type="button" classnom="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Resize Quarter"><span classnom="note-fontsize-10">25%</span></button></div><div classnom="note-btn-group btn-group note-float">
                        <button type="button" classnom="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Float Left"><i classnom="note-icon-align-left"></i></button>
                        <button type="button" classnom="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Float Right"><i classnom="note-icon-align-right"></i></button>
                        <button type="button" classnom="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Float None">
                            <i classnom="note-icon-align-justify"></i></button></div>
                    <div classnom="note-btn-group btn-group note-remove">
                        <button type="button" classnom="note-btn btn btn-default btn-sm" tabindex="-1" title="" data-original-title="Remove Image"><i classnom="note-icon-trash"></i></button></div></div></div>
                <div classnom="tooltip fade bs-tooltip-right" role="tooltip" idDomaine="tooltip848872" x-placement="right" style={{ position: "absolute" }}  ><div classnom="arrow" ></div><div classnom="tooltip-inner">Inbox</div></div>
            </div>
        )
    }
}

export default ListDomaineComponent