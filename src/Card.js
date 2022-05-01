import react from "react";
import { Link } from "react-router-dom";

function Card(props) {
    return (

        <li key={ props.key } >
            <Link to={'/single/'+props.id} className="book">
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
                        <select>
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">
                                Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.title}</div>
                <div className="book-authors">{props.author}</div>
            </Link>
        </li>
    )
}
export default Card;