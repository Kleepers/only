import {TPoint} from "../data";

export const getActiveDateIndex = (dates: Array<TPoint>, text: string) => {
    return dates.findIndex((date: TPoint) => date.text === text)
}