"use client";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import estilos from "./Carrito.module.css";
import { useMemo, useState } from "react";
import { eliminarDelCarrito } from "@/store/slice";

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

  return (
    <>
      <div>{total}</div>
      <div className={estilos.carrito}>
        {carrito.length > 0 ? (
          carrito?.map((valor, indice) => (
            <div key={indice}>
              <img
                onClick={() => eliminar(valor.producto)}
                src={valor.imagen}
                alt=""
                height={60}
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
