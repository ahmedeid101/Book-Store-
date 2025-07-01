// BookSlider.js
import "./BookSlider.css";
import { useContext, useState, useEffect } from "react";
import RatingBook from "./Rating";
import Model from "../Model/Model";
import CartContext from "../../Context/CartContext";
import { BookContext } from "../../Context/BookContext";

const BookSlider = ({ data, title }) => {
    const { addToCart } = useContext(CartContext);
    const { searchTerm, searchTarget, resetTrigger } = useContext(BookContext);
    const [slideIndex, setSlideIndex] = useState(0);
    const [openModel, setOpenModel] = useState(false);
    const [bookData, setBookData] = useState(null);
    const [displayedBooks, setDisplayedBooks] = useState(data);

    useEffect(() => {
        // Reset to first slide when search is cleared
        setSlideIndex(0);
        
        // Apply filtering only if this is the target slider and there's a search term
        if (searchTarget === title && searchTerm) {
            const filtered = data.filter(book => {
                if (!book) return false;
                
                const searchLower = searchTerm.toLowerCase();
                const bookTitle = book.title?.toLowerCase() || '';
                const author = book.author?.toLowerCase() || '';
                const language = book.language?.toLowerCase() || '';
                
                return (
                    bookTitle.includes(searchLower) ||
                    author.includes(searchLower) ||
                    language.includes(searchLower)
                );
            });
            setDisplayedBooks(filtered);
        } else {
            setDisplayedBooks(data);
        }
    }, [data, searchTerm, searchTarget, title, resetTrigger]);

    const handleClick = (direction) => {
        const newIndex = direction === "left" 
            ? Math.max(slideIndex - 1, 0)
            : Math.min(slideIndex + 1, displayedBooks.length - 1);
        setSlideIndex(newIndex);
    };

    const handleModel = (book) => {
        if (!book) return;
        setOpenModel(true);
        setBookData(book);
    };

    return ( 
        <div className="book-slider">
            {slideIndex > 0 && (
                <i 
                    onClick={() => handleClick("left")} 
                    className="bi bi-chevron-double-left book-slider-arrow-left"
                    aria-label="Previous books"
                />
            )} 
            
            <div 
                style={{ transform: `translateX(${slideIndex * -340}px)` }} 
                className="book-slider-wrapper"
            >
                {displayedBooks.length > 0 ? (
                    displayedBooks.map(item => (
                        <div key={item.id} className="book-slider-item">
                            {item.image && (
                                <img 
                                    className="book-slider-item-img" 
                                    src={`/books/${item.image}`} 
                                    alt={item.title || 'Book cover'} 
                                    loading="lazy"
                                />
                            )}
                            <h3 className="book-slider-item-title">{item.title}</h3>
                            <RatingBook 
                                rating={item.rating} 
                                reviews={item.reviews} 
                            />
                            <div className="book-slider-item-price">
                                ${item.price}
                            </div>
                            <div className="book-slider-icon-wrapper">
                                <i 
                                    onClick={() => handleModel(item)} 
                                    className="bi bi-eye-fill"
                                    aria-label="View details"
                                />
                                <i 
                                    onClick={() => addToCart({...item, quantity: 1})} 
                                    className="bi bi-cart-plus"
                                    aria-label="Add to cart"
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        No books found matching your search.
                    </div>
                )}
            </div>
            
            {slideIndex < displayedBooks.length - 1 && (
                <i 
                    onClick={() => handleClick("right")} 
                    className="bi bi-chevron-double-right book-slider-arrow-right"
                    aria-label="Next books"
                />
            )}
            
            {openModel && bookData && (
                <Model bookData={bookData} setOpenModel={setOpenModel}/>
            )}
        </div> 
    );
};

export default BookSlider;