import React, { Component } from 'react';
import {CompaniesList} from './CompaniesList';
import {InvoicesList} from './InvoicesList';
import {AddCompany} from './AddCompany';
import {AddInvoice} from './AddInvoice';
import './App.css';

const companiesDb = [
  {id: 1, name: "Ford Polska", email: "ford@wp.pl"},
  {id: 2, name: "Fiat Italy", email: "fiat@wp.pl"},
  {id: 3, name: "Audi Niemcy", email: "audi@wp.pl"}
]

const invoicesDb = [
  {id: 1, name: 'FV2018', amountToPay: 202.20, dateOfPayment: '20-10-2018', company: {id: 1, name: 'Ford Polska', email: 'ford@wp.pl'}, isPaid: false },
  {id: 2, name: 'FV2017', amountToPay: 211.20, dateOfPayment: '21-10-2018', company: {id: 2, name: 'Fiat Italy', email: 'fiat@wp.pl'}, isPaid: true },
  {id: 3, name: 'FV2016', amountToPay: 211.20, dateOfPayment: '21-10-2016', company: {id: 3, name: 'Audi Niemcy', email: 'audi@wp.pl'}, isPaid: false },

]

localStorage.setItem('companies', JSON.stringify(companiesDb));
localStorage.setItem('invoices', JSON.stringify(invoicesDb));

class App extends Component {
  constructor(){
    super();

    this.state = {
      companies: JSON.parse(localStorage.getItem('companies')),
      invoices: JSON.parse(localStorage.getItem('invoices'))
    };
  }
  
  componentWillMount(){
    const companies = this.getCompanies();
    this.setState({companies});
    const invoices = this.getInvoices();
    this.setState({invoices});
  }

  getCompanies(){
    return this.state.companies;
  }

  getInvoices(){
    return this.state.invoices;
  }

  onAddCompany = (name, email) =>{
    const companies = this.getCompanies();

    const maxIdValue = Math.max(...companies.map(o => o.id), 0);
    const nextFreeId = maxIdValue + 1;
    companies.push({id: nextFreeId, name: name, email: email});
    this.setState({companies});
  }

  canDeleteCompany = (id) =>{
    const invoices = this.getInvoices();
    return invoices.some(invoice => invoice.company.id === id);
  }

  onDeleteCompany = (id) =>{
    const companies = this.getCompanies();
    const filteredCompanies = companies.filter(company =>{
      return company.id !== id;
    });

    this.setState({companies: filteredCompanies})
  }

  onEditCompany = (id) => {
    const companies = this.getCompanies();

    const companiesAfterEdit = companies.map((company) => company.id === id ? {...company, editing: !company.editing} : company);
    this.setState({companies: companiesAfterEdit});
  }

  onSaveCompany = (id, newName, newEmail) =>{
    const companies = this.getCompanies();
    const companiesAfterSave = companies.map((company) => company.id === id ? {
            ...company, 
            name: newName, 
            email: newEmail, 
            editing: !company.editing} : company);
    this.setState({companies: companiesAfterSave});
  }
  // COMPONENT INVOICE
  onAddInvoice = (name, amountToPay, dateOfPayment, companyId) =>{
    const invoices = this.getInvoices();
    const companies = this.getCompanies();

    const maxIdValue = Math.max(...invoices.map(o => o.id), 0);
    const nextFreeId = maxIdValue + 1;
    const selectedCompany = companies.find(company =>{return company.id === companyId});
    // console.log(typeof(companyId))
    // alert(`Dane ${nextFreeId} ${name}, ${amountToPay}, ${dateOfPayment}, ${companyId} wybrana firma to: ${companyWithId.name}`)
    invoices.push({id: nextFreeId, name: name, amountToPay: amountToPay, dateOfPayment: dateOfPayment, company: selectedCompany, isPaid: false});
    this.setState({invoices});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <AddCompany onAddCompany={this.onAddCompany}/>
            <CompaniesList companies = {this.state.companies} 
                           onDeleteCompany = {this.onDeleteCompany} 
                           onEditCompany={this.onEditCompany} 
                           onSaveCompany={this.onSaveCompany}
                           canDeleteCompany={this.canDeleteCompany}
                           />
          </div>
          <div className="col-sm">
            <AddInvoice companies = {this.state.companies} onAddInvoice={this.onAddInvoice}/>
            <InvoicesList invoices = {this.state.invoices} />
          </div>
          <div className="col-sm">
            One of three columns
          </div>
        </div>
      </div>
    );
  }
}

export default App;
