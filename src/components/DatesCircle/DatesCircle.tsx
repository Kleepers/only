import React, {useEffect} from 'react';
import {TPoint} from "../../data";
import {Point} from "./styleComponents/Point";
import {getPointsTextArray} from "../../utils/getPointsTextArray";
import { gsap } from 'gsap'
import {getActiveDateIndex} from "../../utils/getActiveDateIndex";
import {PointNumber} from "./styleComponents/PointNumber";
import {Circle} from "./styleComponents/Circle";
import {PointText} from "./styleComponents/PointText";

type TDatesCircleProps = {
    dates: Array<TPoint>;
    activeDate: string;
    setActiveDate: React.Dispatch<React.SetStateAction<string>>
}

export const DatesCircle = ({dates, activeDate, setActiveDate}: TDatesCircleProps) => {

    const points = getPointsTextArray(dates);
    const activeDateIndex = getActiveDateIndex(dates, activeDate);

    useEffect(() => {
        gsap.to('.circle', { duration: 2, rotation: `${-360/dates.length * (activeDateIndex) - 120}deg)`})
        gsap.to('.point', { duration: 0, rotation: `${360/dates.length * (activeDateIndex) + 120}deg`})
    }, [activeDate])


    return (
        <Circle className='circle' $Length={dates.length}>
            {
                points.map((point, index) =>
                    <Point
                        className='point'
                        $CoordinateX={point.coordinateX}
                        $CoordinateY={point.coordinateY}
                        $Text={point.text}
                        $IsActive={point.text === activeDate}
                        key={index}
                        onClick={() => setActiveDate(point.text)}>
                        {point.text === activeDate
                            ?
                            <>
                                <PointNumber>{index+1}</PointNumber>
                                <PointText>{point.text}</PointText>
                            </>
                            :
                            ''}
                    </Point>
                )
            }
        </Circle>
    );
};
