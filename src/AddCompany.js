import * as React from "react";

export class AddCompany extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }

    onChangeInputName = (event) => {
        this.setState({name: event.target.value})
    }

    onChangeInputEmail = (event) => {
        this.setState({email: event.target.value})
    }

    onAddCompanySubmit = (event) => {
        event.preventDefault();
        const {onAddCompany} = this.props;
        onAddCompany(this.state.name, this.state.email);
        this.setState({name: '', email: ''})
    }

    render(){
        return (
            <div>
                <h1>Add company</h1>
                <form onSubmit={this.onAddCompanySubmit}>
                    <div className="form-group row">
                        <input type="text" className="form-control" id="inputName" placeholder="Company name" value={this.state.name} onChange={this.onChangeInputName}/>
                    </div>
                    <div className="form-group row">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={this.state.email} onChange={this.onChangeInputEmail}/>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Dodaj firmę</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};