import { Footer } from "../../components/footer/Footer";
import { HeaderResp } from "../../components/header/HeaderResp";
import { Produtos } from "../../components/produtos/Produtos";
import style from "./ProductsPage.module.css";

export function ProductsPage() {
    return (
        <>
            <body>
                
                <HeaderResp />

                <Produtos />

                <Footer />

                <script src="mobile-navbar.js"></script>
            </body>
        </>
    );
}

export { style }