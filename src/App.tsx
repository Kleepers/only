import React from 'react';
import 'swiper/css';
import './normalize.css'
import './App.css'
import {dates} from "./data";
import {TestTaskComponent} from "./components/TestTaskComponent/TestTaskComponent";

function App() {
    return (
    <div className="App">
        <TestTaskComponent dates={dates}/>
    </div>
  );
}

export default App;
