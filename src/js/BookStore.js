/**
 * Created by beeraman on 3/24/2017.
 */
import React from 'react';
import BookList from './BookList';
import ShippingDetails from './ShippingDetails';

var BookStore = React.createClass({
    getInitialState(){
        return ({
            currentStep:1
        });
    },
    _renderBook(book){
        return (
            <div>
                <label>
                    <input type="checkbox" />{book.name} -- {book.author}
                </label>
            </div>
        );
    },
    updateFormData(formData){
        console.log(formData);
        var formValues = Object.assign({},this.state.formValues, formData);
        var nextStep = this.state.currentStep +1;
        this.setState({
            currentStep:nextStep,
            formValues:formValues
        });
        console.log(formData);
    },
    render(){
        switch (this.state.currentStep){
            case 1:
                return <BookList updateFormData={this.updateFormData}/>;
            case 2:
                return <ShippingDetails updateFormData={this.updateFormData}/>;
            case 3:
                return <DeliveryDetails />;
        }
    }
});

var DeliveryDetails = React.createClass({
    render(){
        return (
            <h1>DeliveryDetails</h1>
        );
    }
});

export default BookStore;