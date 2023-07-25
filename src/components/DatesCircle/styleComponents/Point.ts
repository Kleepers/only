import styled, {css} from "styled-components";
import {PointText} from "./PointText";
import {PointNumber} from "./PointNumber";

export const Point = styled.div<{ $CoordinateX: number; $CoordinateY: number, $Text: string, $IsActive: boolean }>`
  
  background: #42567A;
  opacity: 100% !important;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  
  ${PointText}, ${PointNumber} {
    display: none;
  }
  
  ${props => css`
    &:hover {
      width: 56px;
      height: 56px;
      background: transparent;
      border: 1px solid rgba(48, 62, 88, 0.5);
      top: ${props.$CoordinateY - 28}px;
      right: ${props.$CoordinateX - 28}px;
      ${PointNumber} {
        display: block;
      }
    }
    top: ${props.$CoordinateY - 3}px;
    right: ${props.$CoordinateX - 3}px;
  `}
  
  ${props => props.$IsActive && css`
    width: 56px;
    height: 56px;
    background: transparent;
    border: 1px solid rgba(48, 62, 88, 0.5);
    top: ${props.$CoordinateY - 28}px;
    right: ${props.$CoordinateX - 28}px;
    
    ${PointNumber}, ${PointText} {
      display: block;
    }
  `}

`