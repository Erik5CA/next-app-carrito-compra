import FichaIndividual from "./FichaIndividual";

const cargarDatos = async (id) => {
  const resp = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  const data = await resp.json();
  return data;
};
const page = async ({ params }) => {
  const { id } = params;
  const datos = await cargarDatos(id);
  return (
    <>
      <FichaIndividual datos={datos} />
    </>
  );
};

export default page;
