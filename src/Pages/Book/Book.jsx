import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import "./Book.css";
import RatingBook from "../../Components/Book_Slider/Rating";

const Book = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === +id); //parseInt(id) == +id

  return (
    <div className="book">
      <div className="book-content">
        <img
          src={`/books/${book.image}`}
          alt={book.title}
          className="book-content-img"
        />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <RatingBook rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              type="number"
              min="0"
              max="100"
              defaultValue="1"
              className="book-add-to-cart-input"
            />
            <button className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">{book.description}</p>

      <div className="book-icons">
        <div className="book-icon">
            <small>Print Length</small>
            <i className="bi bi-file-earmark-break"></i>
            <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
            <small>Language</small>
            <i className="bi bi-globe"></i>
            <b>{book.language}</b>
        </div>
        <div className="book-icon">
            <small>Publication Date</small>
            <i className="bi bi-calendar3"></i>
            <b>{book.PublicationDate}</b>
        </div>
      </div>
        
    </div>
  );
};

export default Book;
