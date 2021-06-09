import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./styleDispo.css"
import sessionService from '../services/SessionService'
import formateurService from '../services/FormateurService'
import ModelAddSession from './ModelAddSession';
import { Modal,Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// add styles as css
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: '',
      start: new Date("2021-03-22T12:30:00Z"),
      end: new Date("2021-03-20T12:30:00Z")
   

    },
    {
      id: createEventId(),
      title: '',
      start: new Date("2021-03-27T12:30:00"),
      end: new Date("2021-03-30T12:30:00")
    }
  ]
  
  export function createEventId() {
    return String(eventGuid++)
  }
  
export default class CalendrierSession extends Component {
    constructor(props) {
        //super is used to access the variables
        super(props);
        this.state = {
            //idFormation: props.location.state.id,
            formation:this.props.location.state.formation,
           sessions:[],
           seances:[],
           formateurs:[],
           formateur:'',
           FiltredFormateurs:[],
          title:'',
          start:new Date(),
          end:new Date(),
          dateSeance:"2017-06-01",
          rend:'',
          nbParticipant:'',

          nbSeance:'',
           weekendsVisible: true,
           currentEvents: [],
           show:false,
           selectInfo: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeNbParticipantHandler = this.changeNbParticipantHandler.bind(this);
        this.changeNbSeanceHandlerUpdate = this.changeNbSeanceHandler.bind(this);
        this.changeStartHandler = this.changeStartHandler.bind(this);
        this.changeEndHandler = this.changeEndHandler.bind(this);
        this.saveSession = this.saveSession.bind(this);
        this.handleShow= this.handleShow.bind(this);
        this.handleClose= this.handleClose.bind(this);  
        this.resizeEvents= this.resizeEvents.bind(this); 
        this.handleDateSelect= this.handleDateSelect.bind(this);
        this.handleEvents= this.handleEvents.bind(this);
        this.changeDateSeanceHandler= this.changeDateSeanceHandler.bind(this);
        this.handleEventClick= this.handleEventClick.bind(this);
        this.changeFormateurHandler=this.changeFormateurHandler.bind(this);
      
        this.renderEventContent= this.renderEventContent.bind(this);
     }
     handleClose (){
        this.setState({show:false})
       
        
       }
       resizeEvents (clickInfo){
        
        sessionService.updateSession({id:clickInfo.event.id,start:new Date(clickInfo.event.startStr),end:new Date(clickInfo.event.endStr),seances:[]} ).then( res => {
     
          });
   
     
       
        
       }
    handleShow (){
       this.setState({show:true})
      
       
      }
     changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    changeDateSeanceHandler = (event) => {
    
        this.setState({ dateSeance: document.getElementById("seanceValue").value() });
        //this.setState({seances: [...this.state.seances,{"date_seance":this.state.dateSeance}]}); 
        console.log("hhhhhseancehhhh")
       // console.log(event.target.value)
      //  console.log(this.state.seances)
       
    }

    changeNbParticipantHandler = (event) => {
        this.setState({ nbParticipant: event.target.value });
    }
    changeFormateurHandler = (event) => {
        this.setState({ formateur: event.target.value });
    }
    changeNbSeanceHandler = (event) => {

        this.setState({ nbSeance: event.target.value });
        
        var seances=''
        for(let i=0; i<event.target.value;i++){
             seances=seances+ '<div class="col-md-12 col-sm-12"><div className="form-group"><label>Date Séance </label>'
                                   +'<input type="datetime-local" id="'+i+'" class="form-control"  value=""  />'
                                  +'</div>'
                              +'</div>'
             
                              +'</div>';
                           

        }
     
        this.setState({ rend: seances });   
        }
   
    
    changeStartHandler = (date) => {
       
        this.setState({ start: date});
    }
    changeEndHandler = (date) => {
        this.setState({ end: date });
        
    }
    filterFormateur(){
    
        var forma=[]
        var testDispo;
       
        for (let i = 0; i < this.state.formateurs.length; i++) {
            testDispo=false;   
           
           
              
            
            if(this.state.formateurs[i].disponibilites.length!=0){
            for (let j = 0; j < this.state.formateurs[i].disponibilites.length; j++) {
            if( new Date(this.state.formateurs[i].disponibilites[j].start)>new Date(this.state.selectInfo.startStr)){
             testDispo=true 
            } 
                  
    
}
      
if(testDispo==true)
forma.push(this.state.formateurs[i]) 
        }
    
    }
        this.setState({ FiltredFormateurs:forma}) 
   
    
    }
     renderEventContent(eventInfo) {
      
        return (
          <>
           
            <h6 style={{color:"white"}}>{eventInfo.event.title}</h6>
          </>
        )
      }
    handleDateSelect = (selectInfo) => {
        //let title = prompt('Please enter a new title for your event')
        //let calendarApi = selectInfo.view.calendar
        this.setState({show:true})
        
        this.setState({selectInfo:selectInfo})
        this.filterFormateur()
    
     
        /*this.setState({show:true})
        this.setState({start:selectInfo.startStr})
        this.setState({end:selectInfo.endStr})
        calendarApi.unselect() // clear date selection
   
        if (this.state.title!='') {
          calendarApi.addEvent({
            id: createEventId(),
            title: this.state.title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }*/
        let calendarApi = this.state.selectInfo.view.calendar
        calendarApi.unselect() // clear date selection
        console.log(this.state.title)
        if(this.state.title!=''){
        calendarApi.addEvent({
            id: (this.state.sessions.length==0)?0:this.state.sessions[this.state.sessions.length-1].id+1,
            title: this.state.title,
            start: this.state.selectInfo.startStr,
            end: this.state.selectInfo.endStr,
            nbParticipant:this.state.nbParticipant,
            nbSeance:this.state.nbSeance,
            formation:this.props.location.state.formation,
            seances:[],

            allDay: this.state.selectInfo.allDay
          }) 
        }
        
      }
      
  handleEventClick = (clickInfo) => {
  
    clickInfo.event.remove()
  
}
    saveSession() {
       
for(let i=0;i<this.state.nbSeance;i++){
       // this.setState({seances: [...this.state.seances,{"date_seance":document.getElementById(i).value}]});
        this.state.seances.push({dateSeance:document.getElementById(i).value,session:{id:(this.state.sessions.length==0)?0:this.state.sessions[this.state.sessions.length-1].id+1},formateur:{idUser:this.state.formateur}})
       console.log(document.getElementById(i).value)
    }
        console.log("seancessss")
       
        //this.props.history.push('/add-Specialite/_add');
        let session = { id: (this.state.sessions.length==0)?0:this.state.sessions[this.state.sessions.length-1].id+1 , title: this.state.title,start: new Date(this.state.selectInfo.startStr),end: new Date(this.state.selectInfo.startStr), nbParticipant: this.state.nbParticipant,nbSeance: this.state.nbSeance,formation:this.state.formation,seances:this.state.seances,formateur:{idUser:this.state.formateur }};
     
        sessionService.createSession(session).then(res => {
      
              //this.handleEvents({id:createEventId(),title:"rr",start:this.state.selectInfo.startStr,end:this.state.selectInfo.endStr,nbParticipant:1,formation:this.props.location.state.formation,seances:[]})
            this.setState({sessions : [...this.state.sessions, {'id':res.data.id,'title':res.data.title,'start':this.state.selectInfo.startStr,'end':this.state.selectInfo.endStr, allDay: this.state.selectInfo.allDay,nbParticipant:res.data.nbParticipant,formation:this.props.location.state.formation,
            seances:[],formateur:{idUser:this.state.formateur}}] 
           
            
        })
      
        this.setState({show:false}) 
        this.setState({selectedInfo:null}) 
        });
        
    }
    handleEvents = (events) => {
      
       /* this.setState({
          
          sessions:
          
        })
        console.log(this.state.sessions)*/
      }
     componentDidMount() {
console.log(this.props.location.state.formation)
        sessionService.getSessions(this.state.formation.idFormation).then((res) => {
            console.log("sessions from server")
            this.setState({ sessions: res.data });
            console.log(this.state.sessions)

          
        });
        
        var formas=[]
        formateurService.getFormateurs().then((res) => {
         
            res.data.map(forma=>formas.push({'idUser':forma.idUser,'nom':forma.nom,'prenom':forma.prenom,'genre':forma.genre,'tel':forma.tel,'email':forma.email,'cin':forma.cin,'salaire':forma.salaire,'domaine':forma.specialites.map(spec=>spec.domaine.nom),'specialites':forma.specialites,'disponibilites':Object.values(forma.disponibilites),sessions:forma.sessions}))
            
            
            this.setState({formateurs: formas });
           console.log("******dispo*****")
         
        });
        
    }
    


  render() {
    return (
       

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
   
    <div className="section-body mt-4">
        <div className="container-fluid">
            <div className="tab-content">

                <div className="tab-pane active" id="gestion-Formateur">
                  
                  <div className="card">
                  <div className="card-body">
                          <div className="row">
  
                              <div className="col-lg-10 col-md-10 col-sm-10">
                              <ModelAddSession  sessions={this.state.sessions} libelle={this.state.title}
                                                        start={this.state.start}  end={this.state.end}  nbParticipant={this.state.nbParticipant}  nbSeance={this.state.nbSeance} 
                                                        changeHandlerStart={this.changeStartHandler}  
                                                        saveSession={this.saveSession}
                                                        changeHandlerEnd={this.changeEndHandler} 
                                                    changeHandlerLibelle={this.changeTitleHandler}
                                                        changeHandlerNbParticipant={this.changeNbParticipantHandler}
                                                        changeHandlerNbSeance={this.changeNbSeanceHandler} />
                              </div>
                              <div className="col-lg-2 col-md-2 col-sm-2">
                             
                              
                              </div>
                          
                          </div>
                      </div>
                      
                  </div>
                  <div className=" card">
                  <div className=" card-body">
                  <div className="fc fc-unthemed fc-ltr " id="calendar">
                  <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            allDay={ false}
            eventResizableFromStart
            weekends={this.state.weekendsVisible}
            //initialEvents={this.state.sessions} // alternatively, use the `events` setting to fetch from a feed
            events={this.state.sessions} 
            select={this.handleDateSelect}
           eventContent={this.renderEventContent} // custom render function
           eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
           eventResize={this.resizeEvents}
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
</div>
</div>
                                    </div>
              </div>

            </div>
        </div>
    </div>
    <Modal show={this.state.show} onHide={this.handleClose} class="sweet-alert" >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row clearfix"> <div className="col-md-1 col-sm-2"> </div>  <div className="col-md-6 col-sm-6 error"> 
   
        </div></div>

<div className="row clearfix">
                              
                              <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                      <label>Libellé</label>
                                      <input type="text" className="form-control"  placeholder="Entrer Libelle"
                                       value= {this.state.title} onChange = {this.changeTitleHandler} id="libelle" />
                                  </div>
                                
                              </div>
                              <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                      <label>Formateurs</label>
                                      <select class="form-control input-height" name="gender"  
                                                   onChange = {this.changeFormateurHandler} value= {this.state.formateur} >
                                                    <option value="">Select...</option>
                                                    
                                                {
                                                    this.state.FiltredFormateurs.map(
                                                        formateur =>(
                                                         
                                                                <option key={formateur.idUser} value={formateur.idUser}>{formateur.nom}</option> 
                                                
                                                    ))
                                                }
                                                   
                                                
                                                </select>
                                  </div>
                                
                              </div>
                         
                            
                                    
</div>


      <div className="row clearfix">
                              
                              <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                      <label>Nombre Participant</label>
                                      <input type="text" className="form-control"  placeholder="Entrer Nombre Participant"
                                       value= {this.state.nbParticipant} onChange = {this.changeNbParticipantHandler}  />
                                  </div>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                  <div className="form-group">
                                      <label>Nombre Séance</label>
                                      <input type="text" className="form-control"  placeholder="Entrer Nombre Séance"
                                       value= {this.state.nbSeance} onChange = {this.changeNbSeanceHandler}  />
                                  </div>
                              </div>
                            
                           
</div>

<div className="row clearfix" ref="seances" dangerouslySetInnerHTML={{ __html: this.state.rend}}>

</div>
  

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick= {this.saveSession } type="submit">
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
       
    )
  }



  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }



}



