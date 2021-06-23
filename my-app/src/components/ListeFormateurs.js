import React, { Component,Fragment } from 'react'
import FormateurService from '../services/FormateurService'
import ModelAddFormateur from '../components/ModelAddFormateur'
import ModelDeleteSpecialite from '../components/ModelDeleteSpecialite'
import ModelUpdateFormateur from '../components/ModelUpdateFormateur'
import ReactDatatable from '@ashvin27/react-datatable';
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
class ListFormateurs extends Component {
    constructor(props) {
        super(props)
 
        this.columns = [
            {
                key: "cin",
                text: "Cin",
                className: "cin",
                align: "left",
                sortable: true,
            },
            {
                key: "nom",
                text: "Nom",
                className: "nom",
                align: "left",
                sortable: true
            },
            ,
            {
                key: "prenom",
                text: "Prenom",
                className: "nom",
                align: "left",
                sortable: true
            },
            ,
            {
                key: "genre",
                text: "Genre",
                className: "nom",
                align: "left",
                sortable: true
            },
            ,
            {
                key: "tel",
                text: "Tel",
                className: "nom",
                align: "left",
                sortable: true
            },
            ,
            {
                key: "email",
                text: "Email",
                className: "nom",
                align: "left",
                sortable: true
            },
            ,
            {
                key: "salaire",
                text: "Salaire",
                className: "nom",
                align: "left",
                sortable: true
            },
            ,
            {
                key: "domaine",
                text: "Domaine",
                className: "nom",
                align: "left",
                sortable: true,
                cell: record => {
                  
                    return (
                        <Link to={{
                            pathname: '/specialites_formateur',
                          
                            state: { specialites: record.specialites,nom:record.nom}
                          }}> {record.domaine} </Link>
                        
                    );
                }
            },
            ,

            {
                key: "dispo",
                text: "Dispo",
                className: "dispo",
            
                align: "left",
                sortable: false,
                width:2,
                cell: record => {
                    return (
                        <Link to={{
                            pathname: '/disponiblites',
                          
                            state: {disponibilites: record.disponibilites,nom:record.nom}
                          }}> <i className="fa fa-calendar"></i> </Link>
                        
                    );
              
                }
            },
            {
                key: "action",
                text: "Action",
                className: "action",
                width: 30,
                align: "left",
                sortable: false,
                cell: record => {
                  
                    return (
                        <Fragment>
                           
                           <ModelUpdateFormateur formateurs={this.state.formateurs}  
                           />

                            <ModelDeleteSpecialite id={record.idUser} deleteSpecialite={this.deleteFormateur} />

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
                idUser:0,
                formateurs: [],
                cin: '',
                nom: '',
                prenom: '',
                genre: '',
                tel: '',
                email: '',
                motdepasse: '',
                salaire: '',
                
        }
        this.saveFormateur = this.saveFormateur.bind(this);
        this.changeCinHandler = this.changeCinHandler.bind(this);
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.changeGenreHandler = this.changeGenreHandler.bind(this);
        this.changeTelHandler = this.changeTelHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMpHandler = this.changeMpHandler.bind(this);
        this.changeSalaireHandler = this.changeSalaireHandler.bind(this);
      
        this.editFormateur = this.editFormateur.bind(this);
        this.deleteFormateur = this.deleteFormateur.bind(this);
    }

    deleteFormateur(id){
        FormateurService.deleteFormateur(id).then( res => {
            this.setState({formateurs: this.state.formateurs.filter(Formateur => Formateur.idUser !== id)});
        });
    }
    viewFormateur(id){
        this.props.history.push(`/view-Formateur/${id}`);
    }
    editFormateur(id){
        this.props.history.push(`/add-Formateur/${id}`);
    }

    componentDidMount(){
        var formas=[]
        FormateurService.getFormateurs().then((res) => {
       
            res.data.map(forma=>formas.push({'idUser':forma.idUser,'nom':forma.nom,'prenom':forma.prenom,'genre':forma.genre,'tel':forma.tel,'email':forma.email,'cin':forma.cin,'salaire':forma.salaire,'domaine':forma.specialites.map(spec=>spec.domaine.nom),'specialites':forma.specialites,'disponibilites':forma.disponibilites}))
            
            console.log(this.state.formateurs);
            this.setState({formateurs: formas });
           // console.log(this.state.formateurs[0].specialites[0].domaine.nom);
        });
    }

    saveFormateur = () => {
        //e.preventDefault();
        let formateur = {
            idUser:(this.state.formateurs.length==0)?0:this.state.formateurs[this.state.formateurs.length-1].idUser+1,
            cin: this.state.cin,
            nom: this.state.nom,
            prenom: this.state.prenom,
            genre: this.state.genre,
            tel: this.state.tel,
            email: this.state.email,
            motdepasse: this.state.motdepasse,
            salaire:this.state.salaire,
            deleted:0
         
            
          
           
     
        };
        console.log('formateur => ' + JSON.stringify(formateur));

            FormateurService.createFormateur(formateur).then(res =>{
                this.setState({formateurs : [...this.state.formateurs,res.data]}); 
                this.setState({cin:''});
                this.setState({nom:''});
                this.setState({prenom:''});
                this.setState({genre:''});
                this.setState({tel:''});
                this.setState({email:''});
                this.setState({motdepasse:''});
                this.setState({slaire:''});
            });
      
    }
    
    changeNomHandler= (event) => {
        this.setState({nom: event.target.value});
    }
    changePrenomHandler= (event) => {
        this.setState({prenom: event.target.value});
    }
    changeGenreHandler= (event) => {
        this.setState({genre: event.target.value});
    }
    changeTelHandler= (event) => {
        this.setState({tel: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeMpHandler= (event) => {
        this.setState({motdepasse: event.target.value});
    }
    changeSalaireHandler= (event) => {
        this.setState({salaire: event.target.value});
    }
    changeCinHandler= (event) => {
        this.setState({cin: event.target.value});
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
                                <span className="avatar" style={{backgroundImage: "url(../assets/images/cha.png)"}}></span>{JSON.parse(localStorage.getItem("currentUser"))["nom"]+" "+JSON.parse(localStorage.getItem("currentUser"))["prenom"]}</a>
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

                <div className="tab-pane active" id="gestion-Formateur">
                  
                  <div className="card">
                  <div class="card-body">
                          <div class="row">
  
                              <div className="col-lg-10 col-md-10 col-sm-10">
                                
                              </div>
                              <div className="col-lg-2 col-md-2 col-sm-2">
                              <ModelAddFormateur   cin = {this.state.cin} 
                                            nom = {this.state.nom} genre = {this.state.genre} 
                                            prenom = {this.state.prenom} tel = {this.state.tel} 
                                            mp = {this.state.motdepasse}   email= {this.state.email} salaire = {this.state.salaire}
                                            changeHandlerCin= {this.changeCinHandler}
                                            changeHandlerMp= {this.changeMpHandler}
                                            changeHandlerNom= {this.changeNomHandler}
                                            changeHandlerPrenom= {this.changePrenomHandler} 
                                            changeHandlerGenre= {this.changeGenreHandler} changeHandlerTel= {this.changeTelHandler}
                                            changeHandlerEmail= {this.changeEmailHandler} 
                                            changeHandlerSalaire= {this.changeSalaireHandler} saveFormateur={this.saveFormateur}/>
                              
                              </div>
                          
                          </div>
                      </div>
                      
                  </div>
                  <div className=" card">
                                <div className="card-body">
                              
                          
                                  <div class="row">
                                  <div class="col-sm-12 responsive">
                                    <ReactDatatable
                                        className="table table-hover table-vcenter table-striped  text-nowrap "
                                        tHeadClassName="dataTableD"
                                        config={this.config}
                                        records={this.state.formateurs}
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

export default ListFormateurs