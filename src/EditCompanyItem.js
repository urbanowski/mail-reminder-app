import * as React from "react";
import {Component} from 'react';

export class EditCompanyItem extends Component { 
    constructor(props){
        super(props);

        this.state = {
            name: this.props.name,
            email: this.props.email
        }
    }
  
  onChangeNameHandler = (event) =>{
      this.setState({name: event.target.value})
  }

  onChangeEmailHandler = (event) =>{
    this.setState({email: event.target.value})
    }

  onSave = () =>{
    const {id, onSave} = this.props;
    onSave(id, this.state.name, this.state.email);
  }

  render(){
    const { id } = this.props;

    return (
      <tr>
        <th scope="row">{id}</th>
        <td><input value={this.state.name} onChange={this.onChangeNameHandler}/></td>
        <td><input type="email" id="emailInput" className="form-control" value={this.state.email} onChange={this.onChangeEmailHandler}/></td>
        <td>
          <button className="btn btn-primary btn-sm" onClick={this.onSave}>Save</button>
        </td>
        </tr>
    )
  }
}