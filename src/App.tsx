import React, {useState} from 'react';
import 'swiper/css';
import './normalize.css'
import './App.css'
import {HistoricalDates} from "./components/HistoricalDates/HistoricalDates";
import {DatesCircle} from "./components/DatesCircle/DatesCircle";

import {dates} from "./data";
import {getActiveDateIndex} from "./utils/getActiveDateIndex";
import {Wrapper} from "./components/DatesBlockWrapper/styleComponents/Wrapper";
import {DatesBlockWrapper} from "./components/DatesBlockWrapper/DatesBlockWrapper";

function App() {
    const [activeDate, setActiveDate] = useState(`${dates[0].text}`);
    const activeDateIndex = getActiveDateIndex(dates, activeDate);

    return (
    <div className="App">
        <DatesBlockWrapper date={dates[activeDateIndex]}>
            <DatesCircle dates={dates} activeDate={activeDate} setActiveDate={setActiveDate}/>
            <HistoricalDates datesDescription={dates[activeDateIndex].dates}/>
        </DatesBlockWrapper>
    </div>
  );
}

export default App;
