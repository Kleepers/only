import React from 'react';
import {ControlButton} from "./styleComponents/ControlButton";
import LeftArrow from '../../assets/LeftArrow.svg'
import RightArrow from '../../assets/RightArrow.svg'
import {CircleControllerWrapper} from "./styleComponents/CircleControllerWrapper";
import {Counter} from "./styleComponents/Counter";
import {ControlButtonWrapper} from "./styleComponents/ControlButtonWrapper";
import {TPoint} from "../../data";

type TCircleControllerProps = {
    setActiveDateText: React.Dispatch<React.SetStateAction<string>>;
    activeDataIndex: number;
    dates: Array<TPoint>
}

export const CircleController = ({setActiveDateText, activeDataIndex, dates}: TCircleControllerProps) => {

    const decrementActiveDataIndex = () => {
        setActiveDateText(dates[activeDataIndex - 1].text)
    }
    const incrementActiveDataIndex = () => {
        setActiveDateText(dates[activeDataIndex + 1].text)
    }

    const isLeftButtonDisabled = activeDataIndex === 0
    const isRightButtonDisabled = activeDataIndex === dates.length - 1;
    return (
        <CircleControllerWrapper>
            <Counter>
                0{activeDataIndex+1}/0{dates.length}
            </Counter>
            <ControlButtonWrapper>
                <ControlButton
                    disabled={isLeftButtonDisabled}
                    $IsDisabled={isLeftButtonDisabled}
                    onClick={decrementActiveDataIndex}>

                    <img src={LeftArrow} alt='leftArrow'></img>

                </ControlButton>
                <ControlButton
                    disabled={isRightButtonDisabled}
                    $IsDisabled={isRightButtonDisabled}
                    style={{marginLeft: '20px'}}
                    onClick={incrementActiveDataIndex}>

                    <img src={RightArrow} alt='rightArrow'></img>

                </ControlButton>
            </ControlButtonWrapper>
        </CircleControllerWrapper>
    );
};
