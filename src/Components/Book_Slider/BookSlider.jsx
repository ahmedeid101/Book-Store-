import "./BookSlider.css";
import { useState } from "react";
import RatingBook from "./Rating";


const BookSlider = ({data}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex -1);
        }else{
            setSlideIndex(slideIndex +1)
        }
    }

    return ( 
    <div className="book-slider">
        {slideIndex >= 0 && <i onClick={() => handleClick("left")} className="bi bi-chevron-double-left book-slider-arrow-left"></i>} 
            <div style={{transform: `translateX(${slideIndex * -340}px)`}} className="book-slider-wrapper">
                {data.map(item => 
                <div key={item.id} className="book-slider-item">
                    <img className="book-slider-item-img" src={`/books/${item.image}`} alt={item.title} />
                    <h3 className="book-slider-item-title">{item.title}</h3>
                    <RatingBook rating={item.rating} reviews={item.reviews}/>
                    <div className="book-slider-item-price">${item.price}</div>
                    <div className="book-slider-icon-wrapper">
                        <i className="bi bi-eye-fill"></i>
                        <i className="bi bi-cart-plus"></i>
                    </div>
                </div>)}
            </div>
        {slideIndex <= data.length-1 && <i onClick={() => handleClick("right")} className="bi bi-chevron-double-right book-slider-arrow-right"></i>}

    </div> );
}
 
export default BookSlider;