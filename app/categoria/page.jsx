/* eslint-disable no-undef */
import Link from "next/link";
import BotonVer from "./BotonVer";
import "./Categorias.css";
import estilos from "../productos/Productos.module.css";

const page = async () => {
  const resp = await fetch("https://fakestoreapi.com/products/categories");
  const categorias = await resp.json();
  const productos = await Promise.all(
    categorias.map(async (categoria) => {
      const resp = await fetch(
        `https://fakestoreapi.com/products/category/${categoria}?limit=1`
      );
      const producto = await resp.json();
      return {
        image: producto[0].image,
        categoria,
      };
    })
  );
  return (
    <>
      <div className={estilos.header}>
        <h2>Categorias:</h2>
        <Link href={"/"}>
          <button className={estilos.boton}>Volver</button>
        </Link>
      </div>
      <div className="categorias">
        <div className="columnas">
          {categorias.map((valor, indice) => (
            <div className={`columna categoria`} key={indice}>
              {valor}
            </div>
          ))}
        </div>
        <div className="columnas">
          {productos.map((valor, indice) => (
            <div className="columna" key={indice}>
              <BotonVer valor={valor} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
