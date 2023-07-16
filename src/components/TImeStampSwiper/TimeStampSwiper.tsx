import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'
import {SwiperWrapper} from "./styleComponents/SwiperWrapper";
import {TimeStamp} from "../TimeStamp/TimeStamp";

import './navigation.css'
import {TDate} from "../../data";

type TTimeStampSwiperProps = {
    datesDescription: Array<TDate>
}

export const TimeStampSwiper = ({datesDescription}: TTimeStampSwiperProps) => {
    return (
        <SwiperWrapper id='swiperWrapper'>
            <Swiper
                spaceBetween={80}
                slidesPerView={3}
                style={{
                    margin: '100px 80px 0 0',
                    padding: '0 80px'
                }}
                modules={[Navigation]}
                navigation
            >
                {datesDescription.map((date) =>
                    <SwiperSlide>
                        <TimeStamp year={date.date} text={date.text}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </SwiperWrapper>
    );
};
