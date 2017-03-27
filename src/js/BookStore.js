/**
 * Created by beeraman on 3/24/2017.
 */
import React from 'react';
import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetails from './DeliveryDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import ModalAlertTimeout from './ModalTimeAlert';
import ReactDOM from 'react-dom';

var BookStore = React.createClass({
    getInitialState(){
        return ({
            currentStep:1,
            formValues:{},
            cartTimeout : 2 * 6
        });
    },
    updateCartTimeout(){

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
    alertCartTimeout(){
        ReactDOM.render(<ModalAlertTimeout />,document.getElementById('modalAlertTimeout'));
        this.setState({
            currentStep: 1,
            formValues:{},
            cartTimeout:1
        });
    },
    updateFormData(formData){
        console.log(formData);
        var formValues = Object.assign({},this.state.formValues, formData);
        var nextStep = this.state.currentStep +1;
        this.setState({
            currentStep:nextStep,
            formValues:formValues
        });
        console.log(formValues);
    },
    render(){
        switch (this.state.currentStep){
            case 1:
                return <BookList updateFormData={this.updateFormData}/>;
            case 2:
                return <ShippingDetails updateFormData={this.updateFormData} cartTimeout={this.state.cartTimeout}
                                        updateCartTimeout={this.updateCartTimeout} alertCartTimeout={this.alertCartTimeout}/>;
            case 3:
                return <DeliveryDetails  updateFormData={this.updateFormData} cartTimeout={this.state.cartTimeout}
                                         updateCartTimeout={this.updateCartTimeout} alertCartTimeout={this.alertCartTimeout}/>;
            case 4:
                return <Confirmation data={this.state.formValues} updateFormData={this.updateFormData} cartTimeout={this.state.cartTimeout}
                                     updateCartTimeout={this.updateCartTimeout}/>;
            case 5:
                return <Success data={this.state.formValues} cartTimeout={this.state.cartTimeout}/>
            case 10:
                return <div><h2>Yout Cart timed-out.</h2></div>;
            default:
                return <BookList updateFormData={this.updateFormData}/>;
        }
    }
});

export default BookStore;