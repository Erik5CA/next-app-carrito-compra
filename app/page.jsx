import Link from "next/link";
import estilos from "./Main.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={estilos.contenedor}>
      <h1>Bienvenido a la tienda</h1>
      <h3>
        Compre nuestro productos, buscando por <strong>categorias</strong> o
        bien si lo prefire mostrando <strong>toda la lista</strong> de nuestros
        extenso catalogo.
      </h3>
      <div className={estilos.acciones}>
        <Link href={"/categoria"}>
          <button className={estilos.boton}>Categorias</button>
        </Link>
        <Link href={"/productos"}>
          <button className={estilos.boton}>Productos</button>
        </Link>
      </div>
      <div className={estilos.caja}>
        <Image
          className={estilos.portada}
          src={"/images/portada.jpg"}
          alt=""
          width={300}
          height={280}
        />
      </div>
    </div>
  );
};

export default page;
