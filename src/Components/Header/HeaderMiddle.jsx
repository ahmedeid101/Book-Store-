// HeaderMiddle.js
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { BookContext } from "../../Context/BookContext";

const HeaderMiddle = () => {
    const [localSearch, setLocalSearch] = useState("");
    const { cartItemsLength } = useContext(CartContext);
    const { setSearchTerm, setSearchTarget, resetSearch } = useContext(BookContext);
    const navigate = useNavigate();

    // Handle native clear (when 'x' is clicked)
    useEffect(() => {
        if (localSearch === "") {
            resetSearch();
        }
    }, [localSearch, resetSearch]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (localSearch.trim()) {
            setSearchTerm(localSearch);
            setSearchTarget("Most Gifted");
            navigate("/");
        }
    };

    return (  
        <div className="header-middle">
            <Link to="/" className="header-middle-logo">
                <b>Book</b>
                <i className="bi bi-book"></i>
                <b>Store</b>
            </Link>
            <form onSubmit={handleSearch} className="header-middle-search-box">
                <input 
                    className="header-middle-search-input" 
                    type="search" 
                    placeholder="Search in book store..."
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Escape' && setLocalSearch("")}
                />
                <button type="submit" className="search-button">
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <Link to="/cart" className="header-middle-cart-wrapper">
                {cartItemsLength > 0 && (
                    <b className="cart-notification">{cartItemsLength}</b>
                )}
                <i className="i bi bi-cart2"></i>
            </Link>
        </div>
    );
};

export default HeaderMiddle;