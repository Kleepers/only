import React, {useLayoutEffect} from 'react';
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

    const circleId = getUniqueString();
    const pointId = getUniqueString();

    useLayoutEffect(() => {
        gsap.to(`#${circleId}`, { duration: 2, rotation: `${-360/dates.length * (activeDateIndex) - 150}deg)`})
        gsap.to(`#${pointId}`, { duration: 2, rotation: `${360/dates.length * (activeDateIndex) + 150}deg`})
    }, [activeDateText])

    return (
        <Circle id={circleId} $Length={dates.length}>
            {
                points.map((point, index) =>
                    <Point
                        id={pointId}
                        $CoordinateX={point.coordinateX}
                        $CoordinateY={point.coordinateY}
                        $Text={point.text}
                        $IsActive={point.text === activeDateText}
                        key={index}
                        onClick={() => setActiveDate(point.text)}>
                        <PointNumber>{index+1}</PointNumber>
                        <PointText>{point.text}</PointText>
                    </Point>
                )
            }
        </Circle>
    );
};
