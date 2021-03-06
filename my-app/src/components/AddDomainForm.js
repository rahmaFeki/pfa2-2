import React, { Component } from 'react'
class AddDomainForm extends Component {
    constructor(){
        this.state={
            submitButtonToggle: true,
            id: ''
        }
    }

    inputHandler=(e)=>{
        if(e){
            this.setState({
                id: e.target.value
            })
        }
    }

    render(){
        return(
            <div className="row clearfix">
                                     
            <div className="col-md-6 col-sm-12">
                <div className="form-group">
                    <label>Référence</label>
                    <input type="text" className="form-control" value='this.state.id' id='id' onChange='inputHandler'/>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="form-group">
                    <label>Libellé</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
         
        </div>
          
        )
    }
}
export default AddDomainForm