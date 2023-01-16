import styled from "styled-components";
import logo from "../assets/IconosPresupuesto/Logo.png";

export const Presupuesto = styled.div`
  grid-column: -1/-4;
  grid-row:1/1;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 2;
`
export const Logo = styled.img.attrs({ logo })``