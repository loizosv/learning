import './App.css'
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import Cards from './components/Cards';
import Houses from './components/Houses';

function PersonsAndHouses() {
  return (
    <div className="containers">
      <div className="col">
        <h1 className="ml-5">Online Experiences</h1>
        <p className="ml-5">
          Join unique interactive activities led by one-of-a-kind
          hosts—all without leaving home.
        </p>
        <Cards />
      </div>
      <div className="col">
        <h1 className="ml-5">Amazing Views</h1>
        <p className="ml-5">When you see a Guest Favorite, you’ll know it’s one of the 2 million most loved homes on Airbnb.</p>
        <Houses />
      </div>
    </div>
  );
}

function App() {

  let images = [
    "src/assets/home1.webp",
    "src/assets/home10.webp",
    
    "src/assets/home11.webp",
    "src/assets/person4.png",
    "src/assets/home2.webp",
    "src/assets/person13.png",
    "src/assets/person2.png",
    "src/assets/home3.webp",
    "src/assets/person10.png",
    "src/assets/home4.webp",
    "src/assets/home8.webp",
    "src/assets/home9.webp",
    "src/assets/person0.png",
    "src/assets/person1.png",
    "src/assets/person11.webp",
    "src/assets/home5.webp",
    "src/assets/person12.jpg",
    "src/assets/home6.webp",
    "src/assets/person3.png",
    "src/assets/person5.png",
    "src/assets/home7.webp",
    "src/assets/home12.webp",
    "src/assets/person7.png",
    "src/assets/person8.png",
    "src/assets/person9.png",
    "src/assets/person6.png",
  ];

  return (
    <div>
      <Navbar />
      <SlideShow images={images}/>
      <PersonsAndHouses />
    </div>
  )
}

export default App
