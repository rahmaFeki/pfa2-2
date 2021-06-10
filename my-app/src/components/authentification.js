import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import adminService from '../services/AdminService'
import { useHistory } from "react-router-dom";
class authentification extends Component {
    constructor(props) {
        super(props);
       
        this.changeHandlerEmail = this.changeHandlerEmail.bind(this);
        this.login = this.login.bind(this);
        this.state = {
       
          email: '',
          mp: ''
       
      }
    }
    changeHandlerEmail = (event) => {
      this.setState({ email: event.target.value });
  }
  changeHandlerMp = (event) => {
    this.setState({ mp: event.target.value });
}
    componentDidMount() {

       /* DomaineService.getDomaines().then((res) => {
            this.setState({ domaines: res.data });
           console.log(this.state.domaines)
          
        });*/
       
    }

     login = () => {
     
        let authentif = {idUser:1,email:this.state.email,motdepasse: this.state.mp };
        console.log('domaine => ' + JSON.stringify(authentif));
     
        adminService.login(authentif).then(res => {
          if(res.data!=""){
            console.log(res.data)
          localStorage.setItem('currentUser', JSON.stringify(res.data)); 
          this.props.history.push('/catalogue')  
          }  
          
        })

    }

    changeLibelleHandler = (event) => {
        this.setState({ nom: event.target.value });
    }

    changeIdHandler = (event) => {
        this.setState({ idDomaine: event.target.value });
    }


   

    render() {
        return (
          <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <title>:: Epic :: Login</title>
          {/* Bootstrap Core and vandor */}
          <link rel="stylesheet" href="../assets/plugins/bootstrap/css/bootstrap.min.css" />
          {/* Core css */}
          <link rel="stylesheet" href="../assets/css/style.min.css" />
          <div className="auth option2">
            <div className="auth_left">
              <div className="card">
                <div className="card-body">
                  <div className="text-center">
                    <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo" /></a>
                    <div className="card-title mt-3">Se Connecter à Votre Compte</div>
  
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" value = {this.state.email} placeholder="Entrer email" name="mail" onChange = {this.changeHandlerEmail} />
                  </div>
                  <div className="form-group">
                    <label className="form-label"></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value = {this.state.mp} placeholder="Password" name="mp" onChange = {this.changeHandlerMp}/>
                  </div>
                  <div className="form-group">
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-label">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                  <Button variant="secondary"  onClick={this.login} title>Sign in</Button>
                   
                  </div>
                </div>
              </div>        
            </div>
          </div>
       
        </div>

        )
    }
}
export default authentification