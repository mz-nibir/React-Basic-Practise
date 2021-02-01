
import Book from '../representational/Book';

const Booklist = (props) => {

    return (
        props.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writter={book.writter}
                    delete={() => props.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => props.changeWithinputState(event, index)}
                />
            )

        })


    );


}
export default Booklist;