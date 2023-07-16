import styled, {css} from "styled-components";

export const Point = styled.div<{ $CoordinateX: number; $CoordinateY: number, $Text: string, $IsActive: boolean }>`
  
  background: #42567A;
  opacity: 100% !important;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  
  ${props => css`
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
  `}

`