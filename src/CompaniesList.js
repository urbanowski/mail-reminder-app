import * as React from "react";
import { CompanyItem } from "./CompanyItem";
import { EditCompanyItem } from "./EditCompanyItem";

export class CompaniesList extends React.Component {
  
  companyToCompanyItem = company => {
    const { id, name, email, editing } = company;
    const key = company.name;
    return editing ? <EditCompanyItem key={key} id={id} name={name} email={email} onSave={this.props.onSaveCompany}/> :
                     <CompanyItem key={key} id={id} name={name} email={email} onDelete={this.props.onDeleteCompany} onEdit={this.props.onEditCompany} canDelete={this.props.canDeleteCompany}  />;
  };

  render() {
    return (
      <table className="table table-striped table-dark">
        <thead className="thead-table">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.companies.map(this.companyToCompanyItem)}
        </tbody>
      </table>
    );
  }
}