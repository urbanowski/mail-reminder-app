import * as React from "react";
import { CompanyItem } from "./CompanyItem";

export class CompaniesList extends React.Component {
  companyToCompanyItem = company => {
    const { id, name, email } = company;
    const key = company.name;
    return <CompanyItem key={key} id={id} name={name} email={email} />;
  };

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.companies.map(this.companyToCompanyItem)}
      </ul>
    );
  }
}