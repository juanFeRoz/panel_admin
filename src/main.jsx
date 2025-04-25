import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './App.jsx'
import Clientes from "./Clientes.jsx"
import Proveedor from "./Proveedor.jsx"
import Usuarios from "./Usuarios.jsx"
import Logout from "./Logout.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/proveedor" element={<Proveedor />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/logout" element={<Logout />} />

    </Routes>
  </BrowserRouter>,
)
