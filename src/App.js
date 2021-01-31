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
        { bookName: "1984", writter: "orwell" },
        { bookName: "The Da", writter: "Dan Brown" },
        { bookName: "Alchemist", writter: "Paulo" }
      ],
      anotherProperty: "some text"
    }
  }
  changeBookstate = (newpara) => {
    this.setState({
      books: [
        { bookName: newpara, writter: "Nibir" },
        { bookName: "The Da", writter: "Dan Brown" },
        { bookName: "meta", writter: "franz" }
      ]

    });
  }
  changeWithinputState = (e) => {
    this.setState({
      books: [
        { bookName: e.target.value, writter: "Nibir" },
        { bookName: "The Da", writter: "Dan Brown" },
        { bookName: "meta", writter: "franz" }
      ]

    });

  }

  render() {
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "blue"
    }
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.changeBookstate.bind(this, "new Book")} >Change State</button>
        <input type="text" onChange={this.changeWithinputState} />
        <Book
          bookName={this.state.books[0].bookName}
          writter={this.state.books[0].writter}
          inputName={this.changeWithinputState} />
        <Book
          bookName={this.state.books[1].bookName}
          writter={this.state.books[1].writter} />
        <Book
          bookName={this.state.books[2].bookName}
          writter={this.state.books[2].writter}
          change={() => this.changeBookstate("84")}
        />

      </div>
    );

  }
}




export default App;
