import * as React from "react";
import {Component} from 'react';

export class InvoiceItem extends Component { 

//   constructor(props){
//     super(props);

//     this.state = {
//       isEdit: false
//     }
//   }

//   onEdit = () =>{
//     const {onEdit, id} = this.props;
//     onEdit(id)
//   }

//   onDelete = () =>{
//     const {onDelete, id} = this.props;
//     onDelete(id);
//   }

  render(){
    const { id, name, amountToPay, dateOfPayment, companyName, companyEmail } = this.props;

    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{amountToPay}</td>
        <td>{dateOfPayment}</td>
        <td>{companyName}</td>
        <td>{companyEmail}</td>        
        <td>
          <button className="btn btn-primary btn-sm" onClick={this.onEdit}>Edit</button>
          <button className="btn btn-danger btn-sm" onClick={this.onDelete}>Delete</button>
        </td>
        </tr> 
    )
  }
}