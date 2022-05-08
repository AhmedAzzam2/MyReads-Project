import react from "react";
import { Link } from "react-router-dom";
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
    const { author, title, imageLinks, id, handleChange, search, shelf } = props;


    const shelves = [
        { id: "currentlyReading", shelfName: "Currently Reading", shelfDisplayName: "Currently Reading" },
        { id: "wantToRead", shelfName: "Want to Read", shelfDisplayName: "Want to Read" },
        { id: "read", shelfName: "Read", shelfDisplayName: "Read" },
        { id: "none", shelfName: "None", shelfDisplayName: "None" }
    ];

    // map over the shelves array and return the following:
    // <option value={shelf.id}>{shelf.shelfDisplayName}</option> for each shelf in the array 
    const options = shelves.map(shelf => {
        return { value: shelf.id, label: shelf.shelfDisplayName };
    }
    );
    // set the initial value of the select to the shelf that the book is currently on
    console.log(options);



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
                        <option value="" disabled>Move to... </option>

                        {options.map(option => (
                            (option.value === shelf || shelf == null && option.value == 'none') ?
                                <option value={option.value} selected>{option.label}</option>
                                :
                                <option value={option.value}>{option.label}</option>

                        ))}

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