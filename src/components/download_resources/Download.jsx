import React from "react";
import { Outlet } from "react-router-dom";

export default function Download() {
    return (
        <div className="home">
            <div className="container">
                <h1 className="text-center mt-5">Blog page</h1>
                <Outlet/>
            </div>
        </div>
    );
}