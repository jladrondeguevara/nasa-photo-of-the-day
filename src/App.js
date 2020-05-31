import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

import PhotoContainer from "./Components/PhotoContainer/PhotoContainer"
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer"
import NavigationContainer from "./Components/Navigation/NavigationContainer"




function App () {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=c5VoZPB896NoJGnF805dY3svsBbiBJoRaDIUf8CU')
    .then(response => {
      console.log(response.data);
        setNasaData(response.data);
        // console.log(nasaData);
    })
  }, [])
  
  return (

    <div className="App">

      {/* rendering components */}
      <HeaderContainer />
      <NavigationContainer />
      <PhotoContainer props = {nasaData} />
      {/* {console.log(nasaData)} */}
    </div>
  );
}

export default App;
