import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "misValores",
  initialState: {
    categoria: "",
    miCarrito: [],
  },
  reducers: {
    guardarCategoria: (state, action) => {
      state.categoria = action.payload;
    },
    agregarAlCarrito: (state, action) => {
      state.miCarrito = [...state.miCarrito, action.payload];
    },
    eliminarDelCarrito: (state, action) => {
      state.miCarrito = state.miCarrito.filter(
        (producto) => producto.producto !== action.payload.producto
      );
    },
  },
});

export const { guardarCategoria, agregarAlCarrito, eliminarDelCarrito } =
  origenSlice.actions;
