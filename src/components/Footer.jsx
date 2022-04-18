import React from "react";
import './Footer.css';
function Footer() {
    return (
        <div className="footer ">
            <footer className="py-5 bg-dark footerbkg">
                <div className="container">
                    <p className="m-0 text-center text-white">
                        Meniscus Cell Atlas
                    </p>
                    <p className="m-0 text-center text-white">
                        Copyright. XGlab 2022.
                    </p>
                    <p className="m-0 text-center text-white">
                        Address：Tsinghua Univeristy, Haidian District, Beijing, China
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;