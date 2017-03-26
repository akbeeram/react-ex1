import React from 'react';
import ReactDOM from 'react-dom';
import BookStore from './Bookstore';

var BookList = React.createClass({
    render(){
        return (
            <h1>BookList</h1>
        );
    }
});
var ShippingDetails = React.createClass({
    render(){
        return (
            <h1>ShippingDetails</h1>
        );
    }
});
var DeliveryDetails = React.createClass({
    render(){
        return (
            <h1>DeliveryDetails</h1>
        );
    }
});
const app = document.getElementById('root');
ReactDOM.render(<BookStore />, app);