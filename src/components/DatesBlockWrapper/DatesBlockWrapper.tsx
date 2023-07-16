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
    activeDateIndex: number;
    setActiveDateText: React.Dispatch<React.SetStateAction<string>>;
    dates: Array<TPoint>
}

export const DatesBlockWrapper = ({children, activeDateIndex, setActiveDateText, dates}: TDatesBlockWrapper) => {
    return (
        <Wrapper>
            <VerticalLine />
            <HorizontalLine/>
            <BlockTitle>Исторические даты</BlockTitle>
            <TimeInterval>
                <LeftText>{dates[activeDateIndex].startingDate}</LeftText>
                <RightText>{dates[activeDateIndex].endingDate}</RightText>
            </TimeInterval>
            <CircleController setActiveDateText={setActiveDateText} activeDataIndex={activeDateIndex} dates={dates}/>
            {children}
        </Wrapper>
    );
};
