import React, {useEffect} from 'react';
import {TPoint} from "../../data";
import {Point} from "./styleComponents/Point";
import {getPointsTextArray} from "../../utils/getPointsTextArray";
import { gsap } from 'gsap'
import {getActiveDateIndex} from "../../utils/getActiveDateIndex";
import {PointNumber} from "./styleComponents/PointNumber";
import {Circle} from "./styleComponents/Circle";
import {PointText} from "./styleComponents/PointText";
import {getUniqueString} from "../../utils/getUniqueString";

type TDatesCircleProps = {
    dates: Array<TPoint>;
    activeDateText: string;
    setActiveDate: React.Dispatch<React.SetStateAction<string>>
}

export const DatesCircle = ({dates, activeDateText, setActiveDate}: TDatesCircleProps) => {

    const points = getPointsTextArray(dates);
    const activeDateIndex = getActiveDateIndex(dates, activeDateText);

    const circleClass = getUniqueString();
    const pointClass = getUniqueString();

    useEffect(() => {
        gsap.to(`#${circleClass}`, { duration: 2, rotation: `${-360/dates.length * (activeDateIndex) - 120}deg)`})
        gsap.to(`#${pointClass}`, { duration: 0, rotation: `${360/dates.length * (activeDateIndex) + 120}deg`})
    }, [activeDateText])


    return (
        <Circle className='circle' id={circleClass} $Length={dates.length}>
            {
                points.map((point, index) =>
                    <Point
                        className='point'
                        id={pointClass}
                        $CoordinateX={point.coordinateX}
                        $CoordinateY={point.coordinateY}
                        $Text={point.text}
                        $IsActive={point.text === activeDateText}
                        key={index}
                        onClick={() => setActiveDate(point.text)}>
                        {point.text === activeDateText
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
