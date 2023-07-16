import React from 'react';
import {ControlButton} from "./styleComponents/ControlButton";
import LeftArrow from '../../assets/LeftArrow.svg'
import RightArrow from '../../assets/RightArrow.svg'
import {CircleControllerWrapper} from "./styleComponents/CircleControllerWrapper";
import {Counter} from "./styleComponents/Counter";
import {ControlButtonWrapper} from "./styleComponents/ControlButtonWrapper";

export const CircleController = () => {
    return (
        <CircleControllerWrapper>
            <Counter>
                06/06
            </Counter>
            <ControlButtonWrapper>
                <ControlButton>
                    <img src={LeftArrow}></img>
                </ControlButton>
                <ControlButton style={{marginLeft: '20px'}}>
                    <img src={RightArrow}></img>
                </ControlButton>
            </ControlButtonWrapper>
        </CircleControllerWrapper>
    );
};
