import * as React from "react";
import { InvoiceItem } from "./InvoiceItem";

export class InvoicesList extends React.Component {
  
  invoiceToInvoiceItem = invoice => {
//   {id: 2, name: 'FV2017', amountToPay: 211.20, dateOfPayment: '21-10-2018', company: {id: 1, name: 'Ford Polska', email: 'ford@wp.pl'} },
    
    const { id, name, amountToPay, dateOfPayment, company: {name : companyName, email: companyEmail}, isPaid} = invoice
    const key = invoice.name;
    // return editing ? <EditCompanyItem key={key} id={id} name={name} email={email} onSave={this.props.onSaveCompany}/> :
    //                  <CompanyItem key={key} id={id} name={name} email={email} onDelete={this.props.onDeleteCompany} onEdit={this.props.onEditCompany} />;
  
  return <InvoiceItem key = {key} 
                       id = {id} 
                       name = {name} 
                       amountToPay = {amountToPay} 
                       dateOfPayment = {dateOfPayment} 
                       companyName = {companyName} 
                       companyEmail = {companyEmail}
                       isPaid = {isPaid}/>  
  };

  render() {
    return (
      <table className="table table-striped table-dark">
        <thead className="thead-table">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">AmountToPay</th>
            <th scope="col">DateOfPayment</th>
            <th scope="col">CompanyName</th>
            <th scope="col">CompanyEmail</th>
            <th scope="col">IsPaid</th>
            <th scope="col">Actions</th>            
          </tr>
        </thead>
        <tbody>
          {this.props.invoices.map(this.invoiceToInvoiceItem)}
        </tbody>
      </table>
    );
  }
}