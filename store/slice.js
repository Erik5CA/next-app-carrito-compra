import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "misValores",
  initialState: {
    categoria: "",
    miCarrito: [],
  },
  reducers: {
    guardarCategoria: (state, action) => {},
    agregarAlCarrito: (state, action) => {
      state.miCarrito = [...state.miCarrito, action.payload];
    },
    eliminarDelCarrito: (state, action) => {
      state.miCarrito = state.miCarrito.filter(
        (producto) => producto.id !== action.payload
      );
    },
  },
});

export const { guardarCategoria, agregarAlCarrito, eliminarDelCarrito } =
  origenSlice.actions;
