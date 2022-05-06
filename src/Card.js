import react from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { handleChange } from "./App";

function Card(props) {
    return (

        <li key={ props.id } >
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${props.imageLinks})`,
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select onChange={ props.handleChange } id={props.id} >
                            <option value="none">None</option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
            <Link to={'/single/'+props.id} className="book">
                <div className="book-title">{props.title}</div>
                <div className="book-authors">{props.author}</div>
            </Link>
        </li>
    )
}
export default Card;