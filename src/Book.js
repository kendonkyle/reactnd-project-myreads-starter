import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
    const { book, onCategoryChange } = props;
    let thumbnail;
    if(book.hasOwnProperty('imageLinks'))  {
        thumbnail = book.imageLinks.thumbnail;
    } else {
        thumbnail = "http://via.placeholder.com/128x193";
    }
    return (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                width: 128, height: 193,
                backgroundImage: `url("${thumbnail}")` }}></div>
            <div className="book-shelf-changer">
                <select onChange={(e) => onCategoryChange(book, e)} value={book.shelf} >
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
    </div>
)};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onCategoryChange: PropTypes.func.isRequired
}
export default Book;