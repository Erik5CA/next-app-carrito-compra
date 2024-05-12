import Link from "next/link";

const page = () => {
  return (
    <div>
      Pagina Principal
      <div>
        <Link href={"/categoria"}>
          <button>Categorias</button>
        </Link>
        <Link href={"/productos"}>
          <button>Productos</button>
        </Link>
      </div>
    </div>
  );
};

export default page;
