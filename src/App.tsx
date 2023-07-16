import React, {useState} from 'react';
import 'swiper/css';
import './normalize.css'
import './App.css'
import {HistoricalDates} from "./components/HistoricalDates/HistoricalDates";
import {DatesCircle} from "./components/DatesCircle/DatesCircle";

import {dates} from "./data";
import {getActiveDateIndex} from "./utils/getActiveDateIndex";
import {DatesBlockWrapper} from "./components/DatesBlockWrapper/DatesBlockWrapper";

function App() {
    const [activeDateText, setActiveDateText] = useState(`${dates[0].text}`);
    const activeDateIndex = getActiveDateIndex(dates, activeDateText);

    return (
    <div className="App">
        <DatesBlockWrapper dates={dates} activeDateIndex={activeDateIndex} setActiveDateText={setActiveDateText}>
            <DatesCircle dates={dates} activeDateText={activeDateText} setActiveDate={setActiveDateText}/>
            <HistoricalDates datesDescription={dates[activeDateIndex].dates}/>
        </DatesBlockWrapper>
    </div>
  );
}

export default App;
