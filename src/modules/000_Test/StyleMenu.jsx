import styled, { css } from "styled-components";

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: [header];
  grid-column: 1/4;
  grid-row: 1/1;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 2;
`;

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #801616;
`;
