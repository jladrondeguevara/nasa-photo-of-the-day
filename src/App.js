import React from "react";
import "./App.css";


const nasaData =
axios.get('https://api.nasa.gov/planetary/apod')
.then(response => {
  nasaData = response;
})

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
