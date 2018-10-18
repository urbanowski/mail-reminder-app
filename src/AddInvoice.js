import * as React from "react";

export class AddInvoice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            amountToPay: '',
            dateOfPayment: '',
            selectedCompanyId: 1
        }
    }

    onChangeInputName = (event) => {
        this.setState({name: event.target.value})
    }

    onChangeInputAmountToPay = (event) => {
        this.setState({amountToPay: event.target.value})
    }

    onChangeInputDateOfPayment = (event) => {
        this.setState({dateOfPayment: event.target.value})
    }

    onChangeSelectCompany = (event) => {
        this.setState({selectedCompanyId: Number(event.target.value)})
    }

    onAddInvoiceSubmit = (event) => {
        event.preventDefault();
        const {onAddInvoice} = this.props;
        // alert(`${this.state.name} ${this.state.amountToPay} ${this.state.dateOfPayment} ${this.state.selectedCompanyId}`)
        onAddInvoice(this.state.name, this.state.amountToPay, this.state.dateOfPayment, this.state.selectedCompanyId);
        this.setState({name: '', amountToPay: '', dateOfPayment: ''})
    }

    render(){
        return (
            <div>
                <h1>Add invoice</h1>
                <form onSubmit={this.onAddInvoiceSubmit}>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Invoice name" value={this.state.name} onChange={this.onChangeInputName}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="number" min="0.00" max="10000.00" step="0.01" placeholder="Amount to Pay" value={this.state.amountToPay} onChange={this.onChangeInputAmountToPay}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="date" placeholder="Date of Payment" value={this.state.dateOfPayment} onChange={this.onChangeInputDateOfPayment}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="companiesSelect">Wybierz firmę</label>
                        <select className="form-control" id="companiesSelect" value={this.state.selectedCompanyId} onChange={this.onChangeSelectCompany}>
                            {this.props.companies.map((company) => <option key={company.id} value={company.id}>{company.name}</option>)}
                        </select>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Dodaj fakturę</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};