import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { ProductsPage } from "../Pages/ProductsPage";
import { Error } from "../Pages/Error";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <LandingPage/> } />
                <Route path="/products" element={ <ProductsPage/> } />
                <Route path="*" element={ <Error title="Page Not Found" status="404" /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes };