"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Ficha from "../components/Ficha";
import estilos from "../productos/Productos.module.css";
import Link from "next/link";

const page = () => {
  const categoria = useSelector((state) => state.misValores.categoria);

  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      const respuesta = await fetch(
        `https://fakestoreapi.com/products/category/${categoria}`
      );
      const data = await respuesta.json();
      setContenido(() =>
        data.map((valor) => <Ficha key={valor.id} valor={valor} />)
      );
    }
    obtenerDatos();
  }, [categoria]);

  return (
    <>
      <div className={estilos.header}>
        <h2>{categoria}:</h2>
        <Link href={"/categoria"}>
          <button className={estilos.boton}>Volver</button>
        </Link>
      </div>
      <div className={estilos.productos}>{contenido}</div>
    </>
  );
};

export default page;
