import Link from "next/link";
import Ficha from "../components/Ficha";
import estilos from "./Productos.module.css";

const cargarDatos = async () => {
  const resp = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const data = await resp.json();
  return data;
};

const page = async () => {
  const datos = await cargarDatos();
  return (
    <>
      <div className={estilos.productos}>
        {datos?.map((valor, indice) => (
          <Ficha key={indice} valor={valor} />
        ))}
      </div>
      <Link href={"/"}>
        <button>Volver</button>
      </Link>
    </>
  );
};

export default page;
