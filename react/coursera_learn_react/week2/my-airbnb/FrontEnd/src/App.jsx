import './App.css'
import React, {useEffect, useState} from 'react';
import Navbar from './components/NavbarComponent';
import SlideShowComponent from './components/SlideShowComponent';
import PersonComponent from './components/PersonComponent';
import HouseComponent from './components/HouseComponent';

const BASE_URL = 'http://localhost';
const DB_PORT = ":8081/";

function fetchDataFromDB(url){
  let [isLoading, setIsLoading] = useState(false);
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);                               //Page is loading then set var to true
      try{ //Try connecting to DB
        const response = await fetch(BASE_URL+DB_PORT+url);  //Await the response of the DB request
        const data = (await response.json());           //Convert Response into JSON Object
        setData(data);                                  //Set Data on page
      }catch(error){ console.error('Error fetching data:', error); }
      finally{ setIsLoading=false; }                    //Page is loaded then set var to false
    };
    fetchData();
  }, []);

  return {isLoading, data};
}

function SlideShow(){
  const {isLoading, data} = fetchDataFromDB("images_all");

  if(!isLoading){
    return(
      <div>is Loading . . .</div>
    )
  }else{
    return (
    <SlideShowComponent images={data.map(item => item.IMG_SRC)} />
    )
  }
}

function People(){
  const {isLoading, data} = fetchDataFromDB("people");

  if(!isLoading){
    return(
      <div>is Loading . . .</div>
    )
  }else{
    return (
      <div className="col">
        <h1 className="ml-5">Online Experiences</h1>
        <p className="ml-5">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        <div className="card-deck ml-3">
          {data.map((item, index) => (
            <PersonComponent 
              key={`person_${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

function Houses() {
  const {isLoading, data} = fetchDataFromDB("houses");
  if(!isLoading){
    return(
      <div>is Loading . . .</div>
    )
  }else{
    return (
      <div className="col mt-3">
        <h1 className="ml-5">Amazing Views</h1>
        <p className="ml-5">When you see a Guest Favorite, you’ll know it’s one of the 2 million most loved homes on Airbnb.</p>
        <div className="card-deck ml-3">
          {data.map((item, index) => (
            <HouseComponent 
              key={`house_${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default function App(){
  return(
    <div>
      <Navbar />
      <SlideShow />
      <div className="containers">
        <People />
        <Houses />
      </div>
    </div>
  )
}