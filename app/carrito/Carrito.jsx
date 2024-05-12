"use client";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import estilos from "./Carrito.module.css";
import { useMemo, useState } from "react";
import { eliminarDelCarrito } from "@/store/slice";
import Image from "next/image";

const Carrito = () => {
  const [total, setTotal] = useState(0);

  const carrito = useSelector((state) => state.misValores.miCarrito);
  const dispatch = useDispatch();

  const calcularTotal = useMemo(
    () =>
      setTotal(carrito.reduce((accum, valorAct) => accum + valorAct.precio, 0)),
    [carrito]
  );

  const eliminar = (id) => {
    dispatch(eliminarDelCarrito(id));
  };

  const cargador = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <>
      <div className={estilos.caja}>
        <Image
          src={"/images/carrito.png"}
          alt="icono carrito"
          width={50}
          height={50}
        />
        <div className={estilos.total}>Total: ${total.toFixed(2)}</div>
      </div>
      <div className={estilos.carrito}>
        {carrito.length > 0 ? (
          carrito?.map((valor, indice) => (
            <div
              className={estilos.producto}
              key={indice}
              title="Remover del carrito"
              onClick={() => eliminar(valor)}
            >
              <Image
                loader={cargador}
                src={valor.imagen}
                alt=""
                height={60}
                width={70}
              />
            </div>
          ))
        ) : (
          <div>No hay productos en el carrito</div>
        )}
      </div>
    </>
  );
};

export default Carrito;
