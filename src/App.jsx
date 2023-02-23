import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from "./components/Navbar"

import Store from "./pages/Store"
import Error from "./pages/Error"



export default function App() {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <BrowserRouter>
                <Routes>
                    <Route index element={ <Store />} />
                    <Route path="/Error" element={ <Error />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}