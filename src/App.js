import React from "react";
import "./App.css";

import PhotoContainer from "./Components/PhotoContainer/PhotoContainer"
import HeaderContainer from "./Components/HeaderContainer/HeaderContainer"
import NavigationContainer from "./Components/Navigation/NavigationContainer"


// const nasaData =
// axios.get('https://api.nasa.gov/planetary/apod')
// .then(response => {
//   nasaData = response;
// })

function App() {
  return (
    <div className="App">

      {/* rendering components */}
      <HeaderContainer />
      <NavigationContainer />
      {/* <PhotoContainer /> */}
    </div>
  );
}

export default App;
