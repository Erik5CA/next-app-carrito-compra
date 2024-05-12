"use client";

import { guardarCategoria } from "@/store/slice";
import { Imagen } from "../components/Imagen";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const BotonVer = ({ valor }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const visualizar = (categoria) => {
    dispatch(guardarCategoria(categoria));
    router.push("/portipo");
  };

  return (
    <>
      <div onClick={() => visualizar(valor.categoria)}>
        <Imagen valor={valor} />
      </div>
    </>
  );
};

export default BotonVer;
