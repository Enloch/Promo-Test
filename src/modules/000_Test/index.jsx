import React, { useState } from "react";
import {
  StyledTest,
  Recuadro,
  Presupuesto,
  WrapperPresupuesto,
  WrapperLogo,
  Logo,
  WrapperBotones,
  BotonesNav,
  WrapperEtiquetas,
  Etiquetas,
  EtCategoria,
  EtNombre,
  EtPrecio,
  EtPrecioTotal,
  EtPrecioFinal,
} from "./StylePresupuesto";
import { Menu, WrapperMenu } from "./StyleMenu";
import { COLORS } from "../../global/GlobalStyles";
import { Precios, Nombres } from "./datosPresupuesto";

const Test = ({ id, imgLogo, altLogo, imgBaño }) => {
  const [precioMueble, setPrecioMueble] = useState(Precios.precio_base);
  const [nombreMueble, SetNombreMueble] = useState(Nombres.nombre_base);
  const [precioDucha, SetPrecioDucha] = useState(Precios.precio_base);
  const [nombreDucha, SetNombreDucha] = useState(Nombres.nombre_base);
  const [precioSani, SetPrecioSani] = useState(Precios.precio_base);
  const [nombreSani, SetNombreSani] = useState(Nombres.nombre_base);
  const [precioAcc, SetPrecioAcc] = useState(Precios.precio_base);
  const [nombreAcc, SetNombreAcc] = useState(Nombres.nombre_base);
  const [precioTotal, SetPrecioTotal] = useState(Precios.precio_base);
  function sumTotal() {
    const total =
      parseInt(precioMueble, 10) +
      parseInt(precioDucha, 10) +
      parseInt(precioSani, 10) +
      parseInt(precioAcc, 10);
    return total;
  }
  return (
    <StyledTest bacgroundColor={COLORS.gray05}>
      <Menu>
        <WrapperMenu>
          <button
            onClick={() => {
              setPrecioMueble(Precios.precio_mueble);
              SetNombreMueble(Nombres.nombre_mueble);
              SetPrecioTotal(sumTotal());
            }}
          >
            Mueble
          </button>
          <button
            onClick={() => {
              SetPrecioDucha(Precios.precio_ducha);
              SetNombreDucha(Nombres.nombre_ducha);
              SetPrecioTotal(sumTotal());
            }}
          >
            Ducha
          </button>
          <button
            onClick={() => {
              SetPrecioSani(Precios.precio_sanitario);
              SetNombreSani(Nombres.nombre_sanitario);
              SetPrecioTotal(sumTotal());
            }}
          >
            Sanitario
          </button>
          <button
            onClick={() => {
              SetPrecioAcc(Precios.precio_accesorio);
              SetNombreAcc(Nombres.nombre_accesorio);
              SetPrecioTotal(sumTotal());
            }}
          >
            Accesorio
          </button>
        </WrapperMenu>
      </Menu>
      <Presupuesto>
        <WrapperPresupuesto>
          <WrapperLogo>
            <Logo src={imgLogo} alt={altLogo} />
          </WrapperLogo>
          <WrapperBotones>
            <BotonesNav src={imgBaño} />
            <BotonesNav src={imgBaño} />
            <BotonesNav src={imgBaño} />
          </WrapperBotones>
          <WrapperEtiquetas>
            <Etiquetas>
              <EtCategoria>· Mueble</EtCategoria>
            </Etiquetas>
            <Etiquetas>
              <EtNombre>{nombreMueble}</EtNombre>
              <div>
                <EtPrecio>+</EtPrecio>
                <EtPrecio>{precioMueble}</EtPrecio>
                <EtPrecio>€</EtPrecio>
              </div>
            </Etiquetas>
            <Etiquetas>
              <EtCategoria>· Ducha</EtCategoria>
            </Etiquetas>
            <Etiquetas>
              <EtNombre>{nombreDucha}</EtNombre>
              <div>
                <EtPrecio>+</EtPrecio>
                <EtPrecio>{precioDucha}</EtPrecio>
                <EtPrecio>€</EtPrecio>
              </div>
            </Etiquetas>
            <Etiquetas>
              <EtCategoria>· Sanitario</EtCategoria>
            </Etiquetas>
            <Etiquetas>
              <EtNombre>{nombreSani}</EtNombre>
              <div>
                <EtPrecio>+</EtPrecio>
                <EtPrecio>{precioSani}</EtPrecio>
                <EtPrecio>€</EtPrecio>
              </div>
            </Etiquetas>
            <Etiquetas>
              <EtCategoria>
                <b>· Accesorios</b>
              </EtCategoria>
            </Etiquetas>
            <Etiquetas>
              <EtNombre>{nombreAcc}</EtNombre>
              <div>
                <EtPrecio>+</EtPrecio>
                <EtPrecio>{precioAcc}</EtPrecio>
                <EtPrecio>€</EtPrecio>
              </div>
            </Etiquetas>
            <Etiquetas>
              <EtPrecioTotal>
                <b>Total</b>
              </EtPrecioTotal>
            </Etiquetas>
            <Etiquetas>
              <EtNombre></EtNombre>
              <div>
                <EtPrecioFinal>{precioTotal}</EtPrecioFinal>
                <EtPrecio>€</EtPrecio>
              </div>
            </Etiquetas>
          </WrapperEtiquetas>
        </WrapperPresupuesto>
      </Presupuesto>
      <Recuadro />
    </StyledTest>
  );
};

export default Test;
