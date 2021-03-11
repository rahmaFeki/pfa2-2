import React, { Component } from 'react'
import DomaineService from '../services/DomaineService';

class CreateDomaine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: '',
            libelle: ''
         
        }
        this.saveDomaine = this.saveDomaine.bind(this);
        this.changeLibelleHandler = this.changeLibelleHandler.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
     
    }

    // step 3
    componentDidMount(){

        // step 4
        /*if(this.state.id === '_add'){
            return
        }else{
            DomaineService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId : employee.emailId
                });
            });
        } */       
    }
    saveDomaine = (e) => {
        e.preventDefault();
        let domaine = {libelle: this.state.libelle};
        console.log('domaine => ' + JSON.stringify(domaine));

            DomaineService.createDomaine(domaine).then(res =>{
                this.props.history.push('/domaines');
            });
      
    }
    
    changeLibelleHandler= (event) => {
        this.setState({libelle: event.target.value});
    }

    changeIdHandler= (event) => {
        this.setState({id: event.target.value});
    }


    render() {
        return (
            <div className="page">
  
            <div className="section-body mt-4">
        <div className="container-fluid">
            <div className="tab-content">

                <div className="tab-pane active" id="gestion-domaine">
          
            <div class="col-lg-10 col-md-10 col-sm-10">
            <div className="card">
            <div class="card-body">
            <div className="row">  <div className="col-md-6 col-sm-12">
                <h4>Ajouter Domaine</h4> 
                </div> </div>
            <div className="row clearfix">
                                 
            <div className="col-md-6 col-sm-12">
                
                <div className="form-group">
                    <label>Référence</label>
                    <input type="text" className="form-control" value={this.state.id} onChange={this.changeIdHandler} name="id" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="form-group">
                    <label>Libellé</label> 
                    <input type="text" className="form-control" value={this.state.libelle} onChange={this.changeLibelleHandler} name="libelle"/>
                </div>
            </div>
            <button type="button" class="btn btn-primary" onClick={this.saveDomaine}>Domaine</button>  
        </div>
        </div>
        </div> 
        </div>
        </div>
        </div>
        </div> 
        </div> </div>
         
        )
    }
}

export default CreateDomaine