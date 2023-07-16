import styled, {css} from "styled-components";

export const Circle = styled.div<{ $Length: number; }>`
  position: absolute;
  width: 530px;
  height: 530px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.2);
  margin-left: auto;
  margin-right: auto;
  top: 260px;
  left: 452px;
  
`