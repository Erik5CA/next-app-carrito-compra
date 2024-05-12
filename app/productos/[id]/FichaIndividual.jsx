"use client";

import { Imagen } from "@/app/components/Imagen";
import { agregarAlCarrito } from "@/store/slice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import estilos from "./Ficha.module.css";

const FichaIndividual = ({ datos }) => {
  const dispatch = useDispatch();

  const adquirir = (datos) => {
    dispatch(
      agregarAlCarrito({
        producto: datos.id,
        precio: datos.price,
        imagen: datos.image,
      })
    );
  };

  return (
    <>
      <div className={estilos.ficha}>
        <h3>{datos.title}</h3>
        <div className={estilos.precio}>${datos.price}</div>
        <div className={estilos.descripcion}>{datos.description}</div>
        <div className={estilos.categoria}>{datos.category}</div>
        <div>
          Rate: {datos.rating.rate} Count:({datos.rating.count})
        </div>
        <div className={estilos.imagen}>
          <Imagen valor={datos} />
        </div>
        <div className={estilos.acciones}>
          <button className={estilos.boton} onClick={() => adquirir(datos)}>
            Comprar
          </button>
          <Link href={"/productos"}>
            <button className={estilos.boton}>Volver</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FichaIndividual;
