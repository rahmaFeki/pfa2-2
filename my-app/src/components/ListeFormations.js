import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import ReactDatatable from '@ashvin27/react-datatable';
import ModelAddFormation from '../components/ModelAddFormation'
import ModelDeleteDomaine from '../components/ModelDeleteDomaine'
import ModelUpdateFormation from '../components/ModelUpdateFormation'
import FormationService from '../services/FormationService'
import SpecialiteService from '../services/SpecialiteService'
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
                          
                            state: { formation: record}
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
                key: "etat",
                text: "Etat",
                className: "nom",
                align: "left",
                sortable: true,
                cell: record => {
                    return (
                       
                        <span class={"tag tag-"+record.couleur}>{record.etat}
                       
                        </span>
                        
                        
                    );
              
                }
            
            },
            {
                key: "prix",
                text: "Prix",
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
            idFormation:0,
            specialites:new Array(),
            imgAff:'',
            img: '',
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
        this.extraButtons = [

        ];
        this.saveFormation = this.saveFormation.bind(this);
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changeNiveauHandler = this.changeNiveauHandler.bind(this);
        this.changeObjectifHandler = this.changeObjectifHandler.bind(this);
        this.changePrixHandler = this.changePrixHandler.bind(this);
        this.changeImgHandler = this.changeImgHandler.bind(this);
        this.deleteFormation = this.deleteFormation.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }
    addItem(selectedList, selectedItem) {
      this.state.selectedValues.push(selectedItem['idSpecialite'])
    }
    onRemove(selectedList, removedItem) {
        this.setState({ selectedValues: this.state.selectedValues.filter(formation => formation.key !== removedItem.key) });
        console.log(this.state.selectedValues)
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
        
            this.setState({ formations: res.data });
          
           // var bufferBase64 = Buffer.from(res.data[3].img, 'base64')
       // console.log( URL.createObjectURL('data:image/jpeg;base64',bufferBase64))
            //console.log(bufferBase64)
            
        //var reader = new window.FileReader();
        //reader.readAsDataURL(res.data[3].img);
          //  this.setState({ source: res.data[3].img});
         
        
          
        });
       
        SpecialiteService.getSpecialites().then((res) => {
            this.setState({ specialites: res.data});  
        });
       
    }
    handleUpdate = (updatedFormation) =>{
        this.setState({ formations:   this.state.formations .map(formation => {
            if(formation.idFormation==updatedFormation.idFormation)
                return {nom:updatedFormation.nom,idFormation:formation.idFormation,objectif:updatedFormation.objectif,niveau:updatedFormation.niveau,prix:updatedFormation.prix,etat:updatedFormation.etat,couleur:updatedFormation.couleur}
            return formation
        })
    }) 
      
    }
     saveFormation = () => {
         console.log(this.state.selectedValues)
         
        let formData = new FormData();

        formData.append('img', this.state.img);
        formData.append('idFormation', this.state.idFormation);
        formData.append('nom', this.state.nom);
        formData.append('objectif', this.state.objectif);
        formData.append('niveau', this.state.niveau);
        formData.append('prix', this.state.prix);
        formData.append('specialities',this.state.selectedValues);
 
      
        //e.preventDefault();
       /* let formation = {idFormation:
            (this.state.formations.length==0)?0:this.state.formations[this.state.formations.length-1].idFormation+1,nom: this.state.nom, objectif:this.state.objectif,niveau:this.state.niveau,prix:this.state.prix,img:this.state.img };
        console.log('formation=> ' + JSON.stringify(formation));*/
        console.log(formData)
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
                          
                                <div className="notification d-flex">
              
                                    <div className="dropdown d-flex">
                                        <a href="javascript:void(0)" className="chip ml-3" data-toggle="dropdown">
                                            <span className="avatar" style={{ backgroundImage: "url(../assets/images/cha.png)" }}></span> {JSON.parse(localStorage.getItem("currentUser"))["nom"]+" "+JSON.parse(localStorage.getItem("currentUser"))["prenom"]}</a>
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
                                                objectArray={this.state.specialites}
                                                onSelect={this.addItem} 
                                                 onRemove={this.onRemove}   
                                                displayValue="libelle" 
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