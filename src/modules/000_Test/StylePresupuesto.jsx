import styled, { css } from "styled-components";
import Seccion from "../../components/Seccion";
export const StyledTest = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(12, 1fr);
`;

export const Recuadro = styled.div`
  grid-column: 1 / -1;
  grid-row: 1/1;
  width: 100%;
  height: 100%;
  background-color: #e68686;
`;

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
export const Presupuesto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: -1/-4;
  grid-row: 1/1;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 2;
`;
export const WrapperPresupuesto = styled.div`
  display: flex;
  flex-direction: column;
  height: 98%;
  width: 95%;
  //background-color: #3e6c8a;
`;
export const WrapperLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  height: 10%;
  border-bottom: 1px solid #ffffff;
`;
export const Logo = styled.img``;
export const WrapperBotones = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 10px;
  //background-color: #7a0c68;
`;
export const BotonesNav = styled.img`
  height: 75px;
  width: 75px;
`;
export const WrapperEtiquetas = styled.div`
  margin: 10px;
`;
export const Etiquetas = styled.div`
  display: flex;
  justify-content: space-between;
  //background-color: #5ccc74;
`;
export const EtCategoria = styled.span`
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const EtNombre = styled.span`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
`;
export const EtPrecio = styled.span`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
`;
export const EtPrecioTotal = styled.span`
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const EtPrecioFinal = styled.span`
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
`;
