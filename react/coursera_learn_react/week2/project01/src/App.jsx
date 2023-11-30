import './App.css'
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import peopleData from './data/peopleData';
import houseData from './data/houseData';
import Card from './components/Card';
import House from './components/House';

function PersonsAndHouses() {
  const people = peopleData.map((item, index) => {
    return (
      <Card 
        key={`person_${index}`}
        item={item}
      />
    )
  })

  const houses = houseData.map((item, index) => {
    return(
      <House 
        key={`house_${index}`}
        item={item}
      />
    )
  })

  return (
    <div className="containers">
      <div className="col">
        <h1 className="ml-5">Online Experiences</h1>
        <p className="ml-5">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        <div className="card-deck ml-3">
          {people}
        </div>
      </div>
      <div className="col mt-3">
        <h1 className="ml-5">Amazing Views</h1>
        <p className="ml-5">When you see a Guest Favorite, you’ll know it’s one of the 2 million most loved homes on Airbnb.</p>
        <div className="card-deck ml-3">
          {houses}
        </div>
      </div>
    </div>
  );
}

function App() {

  let images = [
    "src/assets/people/person5.png",
    "src/assets/houses/home1.webp",
    "src/assets/houses/home11.webp",
    "src/assets/people/person4.png",
    "src/assets/people/person13.png",
    "src/assets/houses/home2.webp",
    "src/assets/houses/home3.webp",
    "src/assets/people/person10.png",
    "src/assets/houses/home4.webp",
    "src/assets/people/person1.png",
    "src/assets/houses/home10.webp",
    "src/assets/people/person0.png",
    "src/assets/houses/home8.webp",
    "src/assets/people/person11.webp",
    "src/assets/houses/home5.webp",
    "src/assets/people/person12.jpg",
    "src/assets/houses/home6.webp",
    "src/assets/people/person3.png",
    "src/assets/houses/home9.webp",
    "src/assets/houses/home7.webp",
    "src/assets/houses/home12.webp",
    "src/assets/people/person2.png",
    "src/assets/people/person9.png",
    "src/assets/people/person6.png",
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
