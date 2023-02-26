import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from "./components/Navbar"

import Store from "./pages/Store"
import NotFound from "./pages/NotFound"
import Cancel from "./pages/Cancel"
import Success from "./pages/Success"

import CartProvider from './Context/CartContext'



export default function App() {
    return (
        <CartProvider>
            <div >
                <NavbarComponent></NavbarComponent>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Store />} />
                        <Route path="/*" element={<NotFound />} />
                        <Route path="/Cancel" element={<Cancel />} />
                        <Route path="/Success" element={<Success />} />
                    </Routes>
                </BrowserRouter>
            </ div>
        </CartProvider>
    )
}