import * as React from "react";

export const CompanyItem = ({ id, name, email }) => {
  return (
    <li className="item">
      <div className="content">
        <div className='idCompany'>{id}</div>
        <h4 className="header">{name}</h4>
        <div className="email">{email}</div>
      </div>
    </li>
  );
};
