import react from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { handleChange } from "./App";
import Select from 'react-select'
import PropTypes from "prop-types";

Card.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageLinks: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    search: PropTypes.bool.isRequired

  };
function Card(props) {
    const { author, title, imageLinks, id, handleChange, search ,shelf } = props;

    return (

        <li key={id} >
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${imageLinks})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={handleChange} id={id}  >
                        <option value="none" disabled>Move to...</option>
                        { shelf === 'currentlyReading' ? <option value="currentlyReading" selected >Currently Reading</option> : <option value="currentlyReading">Currently Reading</option> }
                        { shelf === 'wantToRead' ? <option value="wantToRead" selected >Want to Read</option> : <option value="wantToRead">Want to Read</option> }
                        { shelf === 'read' ? <option value="read" selected >Read</option> : <option value="read">Read</option> }
                        
                        {
                            search ?
                                <option value="none" selected>None</option>
                                :
                                <option value="none">None</option>

                        }
                    </select>
                </div>
            </div>
            <Link to={'/single/' + id} className="book">
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </Link>
        </li>
    )
}
export default Card;