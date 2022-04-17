import React from 'react';
import ReactDOM from "react-dom";
//import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigation,Home,Footer,Contact,Portrait,
         Browser, Regulon,
         Download, Resources, Resource} from "./components/component_export";

ReactDOM.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browser" element={<Browser />} />
            <Route path="/portrait" element={<Portrait />} />
            <Route path="/regulon" element={<Regulon />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/download" element={<Download />}>
                <Route path="" element={<Resources />} />
                <Route path=":postSlug" element={<Resource />} />
            </Route>
        </Routes>
        <Footer />
    </Router>,
    document.getElementById("root")
);


/*const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browser" element={<Browser />} />
            <Route path="/portrait" element={<Portrait />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/download" element={<Download />}>
                <Route path="" element={<Resources />} />
                <Route path=":postSlug" element={<Resource />} />
            </Route>
        </Routes>
        <Footer />
    </Router>
)*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
