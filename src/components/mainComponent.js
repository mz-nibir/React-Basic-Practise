import { Component } from "react";
import Booklist from './lists/Booklist'

import booklist from '../assets/books'


class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            books: booklist,
            showBooks: true
        }
    }
    deleteBookState = (index) => {
        //get all books
        const books = this.state.books.slice();
        //delete books
        books.splice(index, 1);
        this.setState({
            books: books
        });


    }

    changeWithinputState = (e, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = e.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({
            books: books
        });


    }
    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks })


    }

    render() {
        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "blue"
        }
        let books = null;
        if (this.state.showBooks) {

            books = <Booklist books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithinputState={this.changeWithinputState}
            />

        }

        // console.log(books);
        return (
            <div className="App">
                <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks} >Toggle books</button>
                {books}


            </div>
        );

    }

}
export default MainComponent;