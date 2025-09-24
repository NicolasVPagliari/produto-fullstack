import { Route, Routes } from "react-router-dom";
import ListarCategorias from "../pages/categorias/listar-categorias";
import ListarPordutos from "../pages/produtos/listar-produtos";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<h1>Página Inicial</h1>} />
      <Route path="/categorias" element={<ListarCategorias />} />
      <Route path="/produtos" element={<ListarPordutos />} />
    </Routes>
  );
}
