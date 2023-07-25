import React, {useState} from 'react';
import {TPoint} from "../../data";
import {DatesCircle} from "../DatesCircle/DatesCircle";
import {HistoricalDates} from "../HistoricalDates/HistoricalDates";
import {DatesBlockWrapper} from "../DatesBlockWrapper/DatesBlockWrapper";
import {getActiveDateIndex} from "../../utils/getActiveDateIndex";

type TTestTaskComponent = {
    dates: Array<TPoint>
}

export const TestTaskComponent = ({dates}: TTestTaskComponent) => {

    const [activeDateText, setActiveDateText] = useState(`${dates[0].text}`);
    const activeDateIndex = getActiveDateIndex(dates, activeDateText);

    return (
        <DatesBlockWrapper dates={dates} activeDateIndex={activeDateIndex} setActiveDateText={setActiveDateText}>
            <DatesCircle dates={dates} activeDateText={activeDateText} setActiveDate={setActiveDateText}/>
            <HistoricalDates datesDescription={dates[activeDateIndex].dates}/>
        </DatesBlockWrapper>
    );
};
