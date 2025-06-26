import './App.css';
import BookSlider from './Components/Book_Slider/BookSlider';
import Header from './Components/Header/Header';
import HeadingTitle from './Components/Heading_Title/HeadingTitle';
import Services from './Components/Services/Services';
import Slider from './Components/Slider/Slider';
import {books} from "./data/books"

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Services/>
      <HeadingTitle title={"Most Gifted"}/>
      <BookSlider data={books}/>
      <HeadingTitle title={"Best Seller"}/>
      <BookSlider data={books}/>
      <HeadingTitle title={"Most Wished For"}/>
      <BookSlider data={books}/>
    </div>
  );
}

export default App;
