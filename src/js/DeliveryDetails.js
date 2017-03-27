/**
 * Created by beeraman on 3/26/2017.
 */
import React from 'react';
import SetIntervalMixin from './SetIntervalMixin';
import CartTimeoutMixin from './CartTimeoutMixin';

var DeliveryDetails = React.createClass({
    propTypes: {
        alertCartTimeout: React.PropTypes.func.isRequired,
        updateCartTimeout: React.PropTypes.func.isRequired,
        cartTimeout: React.PropTypes.number.isRequired
    },
    getInitialState(){
        return ({
            deliveryOption: 'Primary',
            cartTimeout:this.props.cartTimeout
        });
    },
    mixins: [SetIntervalMixin,CartTimeoutMixin],
    componentWillReceiveProps(newProps){
        this.setState({cartTimeout: newProps.cartTimeout});
    },
    handleChange(event){
        this.setState({
            deliveryOption:event.target.value
        });
    },
    handleSubmit(event){
        event.preventDefault();
        this.props.updateFormData(this.state);
    },
    render(){
        var minutes = Math.floor(this.state.cartTimeout / 60);
        var seconds = this.state.cartTimeout - minutes * 60;
        return (
            <div>
                <h1>DeliveryDetails</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       checked={this.state.deliveryOption === "Primary"}
                                       value="Primary"
                                       onChange={this.handleChange} />
                                Primary -- Next day delivery
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio"
                                       checked={this.state.deliveryOption === "Normal"}
                                       value="Normal"
                                       onChange={this.handleChange} />
                                Normal -- 3-4 days delivery
                            </label>
                        </div>
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                    </form>
                </div>
                <div>
                    You have {minutes} Minutes, {seconds} Seconds, before confirming order.
                </div>
            </div>
        );
    }
});

export default DeliveryDetails;