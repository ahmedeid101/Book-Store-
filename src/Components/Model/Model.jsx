import RatingBook from "../Book_Slider/Rating";
import "./Model.css";
import {Link} from "react-router-dom";

const Model = ({bookData, setOpenModel}) => {
    const {image, title, inStock, rating, reviews, author, price, id} = bookData
    return ( 
    <div onClick={() => setOpenModel(false)} className="model-container">
        <div onClick={(event) => event.stopPropagation()} className="model-content">
            <i onClick={() => setOpenModel(false)} className="bi bi-x-circle-fill exit-icon"></i>
            <div className="model-content-img">
                <img src={`/books/${image}`} alt={title} />
            </div>
            <div className="model-content-info">
                <h5 className="model-content-info-title">{title}</h5>
                <div className="model-content-info-stock">
                    <b>Status: </b>  {inStock ? "In Stock" : "Book Not Available"}
                </div>
                <RatingBook rating={rating} reviews={reviews}/>
                <div className="model-content-info-author">
                    <b>Author: </b>  {author}
                </div>
                <div className="model-content-info-price">
                    <b>Price: </b>  ${price}
                </div>
                <div className="model-content-info-cart">
                    <input type="number" min="0" max="100" defaultValue="1" className="model-add-to-cart" />
                    <button className="model-add-to-cart-btn">
                        <i className="bi bi-cart-plus"></i>
                        Add To Cart
                    </button>
                </div>
                <Link to={`/book/${id}`} className="model-content-info-link">See Mode Details</Link>
            </div>
        </div>

    </div> );
}
 
export default Model;