import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

Card.propTypes = {
    author: PropTypes.array.isRequired,
    // title: PropTypes.string.isRequired,
    // imageLinks: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
    // handleChange: PropTypes.func.isRequired,

};

export const shelves = [
    { id: "currentlyReading", shelfName: "Currently Reading", shelfDisplayName: "Currently Reading" },
    { id: "wantToRead", shelfName: "Want to Read", shelfDisplayName: "Want to Read" },
    { id: "read", shelfName: "Read", shelfDisplayName: "Read" },
    { id: "none", shelfName: "None", shelfDisplayName: "None" }
];


// map over the shelves array and return the following:
// <option value={shelf.id}>{shelf.shelfDisplayName}</option> for each shelf in the array 
export const options = shelves.map(shelf => {
    return { value: shelf.id, label: shelf.shelfDisplayName };
}
);

function Card(props) {
    // usestate is a hook that allows us to use state in a functional component
    const [self, setShelf] = useState(props.shelf);

    const { author, title, imageLinks, id, handleChange, shelf } = props;
console.log(props.shelf, "props.shelf");


    return (

        <>
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
                    <select onChange={handleChange} id={id}  value={ self ? self: 'none' }>
                        <option value="" disabled>Move to... </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option> 

                        {/* {options.map(option => (
                            (option.value == shelf || shelf == null && option.value == 'none') ?
                                <option key={option.value} value={option.value} selected>{option.label}</option>
                                :
                                <option key={option.value} value={option.value}>{option.label}</option>

                        ))} */}

                    </select>
                </div>
            </div>
            <Link to={'/single/' + id} className="book">
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </Link>
        </>
    )
}
export default Card;