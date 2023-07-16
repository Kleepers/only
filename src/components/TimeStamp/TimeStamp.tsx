import React from 'react';
import {YearMark} from "./styleComponents/YearMark";
import {TimeStampText} from "./styleComponents/TimeStampText";
import {TimeStampWrapper} from "./styleComponents/TimeStampWrapper";

type TTimeStampProps = {
    year: number;
    text: string;
}

export const TimeStamp = ({year, text}: TTimeStampProps) => {
    return (
        <TimeStampWrapper>
            <YearMark>{year}</YearMark>
            <TimeStampText>{text}</TimeStampText>
        </TimeStampWrapper>
    );
};
