import * as React from "react";
import {Component} from 'react';

export class CompanyItem extends Component { 

  constructor(props){
    super(props);

    this.state = {
      isEdit: false
    }
  }

  onEdit = () =>{
    const {onEdit, id} = this.props;
    onEdit(id)
  }

// fukcja sprawdza czy mogę usunąć firmę z bazy(listy) - czy nie widnieje w rejestrze faktur 
  canDelete = (id) => {
    const {canDelete} = this.props;
    return canDelete(id);
    // alert(`sprawdzam czy mogę usunać ${id}`)
  }

  onDelete = () =>{    
    const {onDelete, id} = this.props;
    if (this.canDelete(id)){
      alert(`W bazie jest zarejestrowana faktura z firmą którą chcesz usunąć`)
      return;
    }
    onDelete(id);
  }

  render(){
    const { id, name, email } = this.props;

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button className="btn btn-primary btn-sm" onClick={this.onEdit}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={this.onDelete}>Delete</button>
        </td>
        </tr> 
        
    )
  }
}