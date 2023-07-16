export const getCirclePointsCoordinates = (numberOfPoints: number, circleWidth?: number) => {
    const result = [];
    for(let i = 0; i < numberOfPoints; i++) {

        let x = 266 + 266 * Math.sin(2 * Math.PI * i / numberOfPoints);
        let y = 266 + 266 * Math.cos(2 * Math.PI * i / numberOfPoints);
        result.push({coordinateX: x, coordinateY: y})
    }

    return result;

}