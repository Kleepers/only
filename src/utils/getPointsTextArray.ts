import {TPoint} from "../data";
import {getCirclePointsCoordinates} from "./getCirclePointsCoordinates";

type TPointsTextArray = Array<TPointWithText>

type TPointWithText = {
    text: string;
    coordinateX: number;
    coordinateY: number;
}

export const getPointsTextArray = (dates: Array<TPoint>) => {
    let result: TPointsTextArray = [];
    const coordinates = getCirclePointsCoordinates(dates.length);
    for (let i = 0; i < dates.length; i++) {
        const obj = {
            text: '',
            coordinateX: 0,
            coordinateY: 0
        };
        obj.text = dates[i].text;
        obj.coordinateX = coordinates[i].coordinateX;
        obj.coordinateY = coordinates[i].coordinateY;
        result.push(obj)
    }
    return result;
}