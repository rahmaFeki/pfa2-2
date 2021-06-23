import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import ReactDatatable from '@ashvin27/react-datatable';
import ModelAddDomaine from '../components/ModelAddDomaine'
import ModelDeleteDomaine from '../components/ModelDeleteDomaine'
import ModelUpdateDomaine from '../components/ModelUpdateDomaine'
import DomaineService from '../services/DomaineService'

class ListeDomaines extends Component {
    constructor(props) {
        super(props);
        this.saveDomaine = this.saveDomaine.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.deleteDomaine = this.deleteDomaine.bind(this);
       
        this.columns = [
            {
                key: "idDomaine",
                text: "Identifiant",
                className: "idDomaine",
                align: "left",
                sortable: true,
            },
            {
                key: "nom",
                text: "Libelle",
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
                           
                            <ModelUpdateDomaine
                                updatedId={record.idDomaine} 
                                updatedLibelle={record.nom}
                                handleUpdate={this.handleUpdate}
                                specialites={record.specialites}
                             
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
            domaines: [
              
            ],
            idDomaine: 0,
            nom: ''
         
        }
        this.extraButtons = [

        ];

    }

    deleteDomaine(idDomaine) {
       
        DomaineService.deleteDomaine(idDomaine).then(res => {
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

        DomaineService.getDomaines().then((res) => {
            this.setState({ domaines: res.data });
           console.log(this.state.domaines)
          
        });
       
    }

     saveDomaine = () => {
        //e.preventDefault();
        let domaine = {idDomaine:
            (this.state.domaines.length==0)?0:this.state.domaines[this.state.domaines.length-1].idDomaine+1,nom: this.state.nom };
        console.log('domaine => ' + JSON.stringify(domaine));

        DomaineService.createDomaine(domaine).then(res => {
          
          // this.state.domaines.push(domaine)
          this.setState({domaines : [...this.state.domaines,res.data]});     
          
        });

    }

    changeLibelleHandler = (event) => {
        this.setState({ nom: event.target.value });
    }

    changeIdHandler = (event) => {
        this.setState({ idDomaine: event.target.value });
    }


    changeIdHandlerUpdate = (event) => {
        this.setState({ updatedId: event.target.value });
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
                            
                                </ul>
                                <div className="notification d-flex">
                                   
                               
                                    <div className="dropdown d-flex">
                                        <a href="javascript:void(0)" className="chip ml-3" data-toggle="dropdown">
                                            <span className="avatar" style={{ backgroundImage: "url(../assets/images/cha.png)" }}></span> {JSON.parse(localStorage.getItem("currentUser"))["nom"]+" "+JSON.parse(localStorage.getItem("currentUser"))["prenom"]}</a>
                                      
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
                                                <ModelAddDomaine nom={this.state.nom}
                                                    idDomaine={this.state.idDomaine} addDomaine={this.saveDomaine} changeHandlerId={this.changeIdHandler}
                                                    changeHandlerLibelle={this.changeLibelleHandler} />

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
                                        records={this.state.domaines}
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
export default ListeDomaines