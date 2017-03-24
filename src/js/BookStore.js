/**
 * Created by beeraman on 3/24/2017.
 */
import React from 'react';

var BookStore = React.createClass({
    getInitialState(){
        return ({
            books: [
                { name: 'Zero to One', author: 'Peter Thiel' },
                { name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
                { name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
            ]
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
    render(){
        return (<div>
            <h3>Choose a book</h3>
            <form>
                {this.state.books.map((book) => {
                    return this._renderBook(book);
                })
                }
            </form>
        </div>);
    }
});
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