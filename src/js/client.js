import React from 'react';
import ReactDOM from 'react-dom';
//import BookStore from './Bookstore';

var BookStore = React.createClass({
    getInitialState(){
      return ({
          books: [
              { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
              { id: 2, name: 'Monk who sold his Fearrary', author: 'Robin Sharma' },
              { id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
          ],
          selectedBooks:[]
      });
    },
    _renderBook(book){
      return (
          <div key={book.id}>
              <label>
                  <input type="checkbox"
                         value={book.name}
                  onChange={this.handleSelectedBooks}/>
                  {book.name} -- {book.author}
              </label>
          </div>
      );
    },
    handleSubmit(event){
        console.log(event);
        event.preventDefault();
        console.log('Form Submitted');
    },
    handleSelectedBooks(event){
        var selectedBooks = this.state.selectedBooks;
        var index = selectedBooks.indexOf(event.target.value);
        if(event.target.checked){
            if(index === -1){
                selectedBooks.push(event.target.value);
            } else {
                selectedBooks.splice(index,1);
            }
            this.setState({
                selectedBooks: selectedBooks
            });
            console.log(this.state.selectedBooks);
        }
    },
    render(){
        return (<div>
            <h3>Choose a book</h3>
            <form onSubmit={this.handleSumit}>
                {this.state.books.map((book) => {
                    return this._renderBook(book);
                })}
                <input type="submit" className="btn btn-success"/>
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
const app = document.getElementById('root');
ReactDOM.render(<BookStore />, app);