import "./Slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) =>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }
    
    return ( 
        <div className="slider">
            <i onClick={() => handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>
            <div style={{transform: `translateX(${slideIndex * -100}vw)`}} className="slider-wrapper">
                <div className="slide first-slider">
                    <div className="slider-img-wrapper">
                        <img src={FirstBook} alt=""></img>
                    </div>
                    <div className="slider-info-wrapper">
                        <h1 className="slider-info-title">Book Stort</h1>
                        <p className="slider-info-desc">It's not just reading. it's living the advanture </p>
                    </div>
                </div>

                <div className="slide second-slider">
                    <div className="slider-img-wrapper">
                        <img src={SecondBook} alt=""></img>
                    </div>
                    <div className="slider-info-wrapper">
                        <h1 className="slider-info-title">The Books For Everyone</h1>
                        <p className="slider-info-desc">You can read from enywhere at home or at work</p>
                    </div>
                </div>

                <div className="slide third-slider">
                    <div className="slider-img-wrapper">
                        <img src={ThirdBook} alt=""></img>
                    </div>
                    <div className="slider-info-wrapper">
                        <h1 className="slider-info-title">Check Out The New Titles</h1>
                        <p className="slider-info-desc">We will send You the book at home</p>
                    </div>
                </div>
            </div>
            <i onClick={() => handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>
        </div>
    );
}
 
export default Slider;