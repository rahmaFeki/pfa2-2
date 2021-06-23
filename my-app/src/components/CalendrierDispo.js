import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import "./styleDispo.css"



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
export default class CalendrierDispo extends Component {
    constructor(props) {
        //super is used to access the variables
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nom: this.props.match.params.nom,
           disponibilites: [{
         
          }],
           weekendsVisible: true,
           currentEvents: []
        }
       
     }
     componentDidMount() {
        

  
   console.log(this.props.location.state.disponibilites)
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
                                Disponibilités de {this.state.nom}
                              </div>
                            
                          
                          </div>
                      </div>
                      
                  </div>
                  <div className=" card">
                  <div className=" card-body">
                  <div className="fc fc-unthemed fc-ltr " id="calendar">
           <FullCalendar
  plugins={[dayGridPlugin, timeGridPlugin]}
  headerToolbar={{
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }}
  initialView='dayGridMonth'
  
  dayMaxEvents={true}
  weekends={this.state.weekendsVisible}
  events={this.props.location.state.disponibilites} // alternatively, use the `events` setting to fetch from a feed
  //select={this.handleDateSelect}
 
 
  //eventClick={this.handleEventClick}
 
  //eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
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
    </div>
       
    )
  }



  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }



}

function renderEventContent(eventInfo) {
  return (
    <>
    <div className="fc-event-container">
        <div className=" fc-h-event fc-event  fc-end bg-info"><div className="fc-content"> 
        <span className="bgevent">{eventInfo.timeText}</span></div>
   </div></div>
 
    </>
  )
}

