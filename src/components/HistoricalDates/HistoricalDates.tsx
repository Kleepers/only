import React from 'react';
import {DatesWrapper} from "./styleComponents/DatesWrapper";
import {TimeStampSwiper} from "../TImeStampSwiper/TimeStampSwiper";
import {TDate} from "../../data";

type THistoricalDatesProps = {
    datesDescription: Array<TDate>
}

export const HistoricalDates = ({datesDescription}: THistoricalDatesProps) => {
    return (
        <DatesWrapper>
            <TimeStampSwiper datesDescription={datesDescription} />
        </DatesWrapper>
    );
};
