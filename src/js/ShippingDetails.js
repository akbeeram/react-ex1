/**
 * Created by beeraman on 3/25/2017.
 */
import React from 'react';

var ShippingDetails = React.createClass({
    getInitialState(){
        return (
        {
            fullName:'',
            contactNumber:'',
            shippingDetails:'',
            error:false
        }
        );
    },
    _renderError(){
        if(this.state.error){
            return (<div>
                {this.state.error}
            </div>);
        }
    },
    _validateInput(){
        if(this.state.fullName === ''){
            this.setState({error:'Please enter full name'});
        } else if(this.state.contactNumber === ''){
            this.setState({error:'Please enter contact number'});
        } else if(this.state.shippingDetails === ''){
            this.setState({error:'Please enter shipping details'});
        } else {
            this.setState({error:false});
            return true;
        }
    },
    handleSubmit(event){
        event.preventDefault();
        var formData = {
            fullName:this.state.fullName,
            contactNumber:this.state.contactNumber,
            shippingDetails:this.state.shippingDetails
        }
        if(this._validateInput()){

            this.props.updateFormData(formData);
        }
    },
    handleChange(event, attribute){
        var newState = this.state;
        newState[attribute] = event.target.value;
        this.setState(newState);
        console.log(this.state);
    },
    render(){
        var errorMessage = this._renderError();
        return (
            <div>
                <h1>Enter you shipping details.</h1>
                {errorMessage}
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text"
                                   placeholder="Full Name"
                                   value={this.state.fullName}
                                   onChange={this.handleChange(event,'fullName')} />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                   type="text"
                                   placeholder="Contact number"
                                   value={this.state.contactNumber}
                                   onChange={(event) => this.handleChange(event,
'contactNumber')}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text"
                                   placeholder="Shipping Address"
                                   value={this.state.shippingAddress}
                                   onChange={(event) => this.handleChange(event,
'shippingAddress')} />
                        </div>
                        <div className="form-group">
                            <button type="submit"
                                    ref="submit"
                                    className="btn btn-success">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

export default ShippingDetails;