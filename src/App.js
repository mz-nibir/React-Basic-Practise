import React, { Component } from 'react';
import './App.css';
import Book from './components/book';
import Person from './components/Person';

//functional Componets
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world!</h1>
//       <Person />
//     </div>
//   );
// }

//class components

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        { id: 1, bookName: "1984", writter: "orwell" },
        { id: 2, bookName: "The Da", writter: "Dan Brown" },
        { id: 3, bookName: "Alchemist", writter: "Paulo" }
      ],
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
      const bookState = this.state.books;
      books = bookState.map((book, index) => {
        return (
          <Book
            bookName={book.bookName}
            writter={book.writter}
            delete={() => this.deleteBookState(index)}
            key={book.id}
            inputName={(event) => this.changeWithinputState(event, index)}
          />
        )

      })

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




export default App;
