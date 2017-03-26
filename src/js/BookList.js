import React from 'react';

var BookList = React.createClass({
    getInitialState(){
        return ({
            books: [
                { id: 1,name: 'Zero to One', author: 'Peter Thiel' },
                { id: 2,name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
                { id: 3,name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
            ],
            selectedBooks:[],
            error:false
        });
    },
    _renderError(){
        if(this.state.error){
            return (<div>
                {this.state.error}
            </div>);
        }
    },
    _renderBook(book){
        return (
            <div key={book.id}>
                <label>
                    <input type="checkbox" onChange={this.handleChange}
                           value={book.name}/>{book.name} -- {book.author}
                </label>
            </div>
        );
    },
    handleChange(event){
        console.log(event.target);
        var selectedBooks = this.state.selectedBooks;
        var index = selectedBooks.indexOf(event.target.value);
        if(event.target.checked){
            if(index === -1){
                selectedBooks.push(event.target.value);
            }
        }else{
            if(index !== -1){
                selectedBooks.splice(event.target.value,1);
            }
        }
        this.setState({selectedBooks:selectedBooks});
        console.log(this.state.selectedBooks);
    },
    handleSubmit(event){
          event.preventDefault();
        console.log('Submitted');
        if(this.state.selectedBooks.length === 0){
            this.setState({
                error:'Please select at least one book to continue'
            });
        }else{
            this.setState({error:false});
            this.props.updateFormData({
                selectedBooks : this.state.selectedBooks
            });
        }
    },
    render(){
        var errorMessage = this._renderError();
        return (<div>
            <h3>Choose a book</h3>
            {errorMessage}
            <form onSubmit={this.handleSubmit}>
                {this.state.books.map((book) => {
                    return this._renderBook(book);
                })}
                <input type="submit" className="btn btn-success"/>
            </form>
        </div>);
    }
});

export default BookList;