import './App.css'
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import Card from './components/Card';
import House from './components/House';

function People(){
  const [data,setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8081/people')
    .then(res => res.json())
    .then(peopleData => setData(peopleData))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="col">
      <h1 className="ml-5">Online Experiences</h1>
      <p className="ml-5">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      <div className="card-deck ml-3">
        {data.map((item, index) => (
          <Card 
            key={`person_${index}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

function Houses() {
  
  const [data,setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8081/houses')
    .then(res => res.json())
    .then(houseData => setData(houseData))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="col mt-3">
      <h1 className="ml-5">Amazing Views</h1>
      <p className="ml-5">When you see a Guest Favorite, you’ll know it’s one of the 2 million most loved homes on Airbnb.</p>
      <div className="card-deck ml-3">
        {data.map((item, index) => (
          <House 
            key={`house_${index}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

function SlideShows(){

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/images_all')
      .then(res => res.json())
      .then(houseData => setData(houseData))
      .catch(err => console.log(err))
  }, []);

  return (
    <SlideShow images={data.map(item => item.IMG_SRC)} />
  );
}


function App(){
 return(
  <div>
    <Navbar />
    <SlideShows/>
    <div className="containers">
      <People />
      <Houses />
    </div>
  </div>
 )
}


export default App
