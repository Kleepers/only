import styled, {css} from "styled-components";



export const ControlButton = styled.button<{ $IsDisabled: boolean}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.$IsDisabled && css`
    opacity: 50%;
  `}
`