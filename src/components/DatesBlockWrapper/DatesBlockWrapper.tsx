import React from 'react';
import {Wrapper} from "./styleComponents/Wrapper";
import {VerticalLine} from "./styleComponents/VerticalLine";
import {HorizontalLine} from "./styleComponents/HorizontalLine";
import {BlockTitle} from "./styleComponents/BlockTitle";
import {TimeInterval} from "./styleComponents/TimeInterval";
import {LeftText} from "./styleComponents/LeftText";
import {RightText} from "./styleComponents/RightText";
import {TPoint} from "../../data";
import {CircleController} from "../CircleController/CircleController";

type TDatesBlockWrapper = {
    children: React.ReactNode;
    date: TPoint;
    activeDateIndex?: number;
    setActiveDate?: React.Dispatch<React.SetStateAction<number>>
}

export const DatesBlockWrapper = ({children, date, activeDateIndex, setActiveDate}: TDatesBlockWrapper) => {
    return (
        <Wrapper>
            <VerticalLine />
            <HorizontalLine/>
            <BlockTitle>Исторические даты</BlockTitle>
            <TimeInterval>
                <LeftText>{date.startingDate}</LeftText>
                <RightText>{date.endingDate}</RightText>
            </TimeInterval>
            <CircleController />
            {children}
        </Wrapper>
    );
};
