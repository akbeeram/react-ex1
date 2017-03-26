/**
 * Created by beeraman on 3/26/2017.
 */
import React from 'react';

var Success = React.createClass({
    render(){
        var numberOfDays = "1to 2 ";
        if(this.props.data.deliveryOption === 'Normal'){
            numberOfDays = "3 to 4 ";
        }
        return (<div>
            <h3>Thank you for shopping with us {this.props.data.fullName}</h3>
            <h5>You will soon get {this.props.data.selectedBooks.join(", ")} at {this.props.data.shippingDetails} in approximately {numberOfDays} days.</h5>
        </div>);
    }
});

export default Success;