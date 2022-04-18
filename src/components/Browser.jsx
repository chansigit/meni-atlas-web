import {Nav, NavItem, NavLink, Row, Col, TabContent, TabPane, Card, CardText, CardTitle, Button} from "reactstrap";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Contact, Download, Footer, Home, Navigation, Portrait, Regulon, Resource, Resources} from "./component_export";

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {Container} from 'reactstrap'
import {Accordion, AccordionBody,AccordionItem,  AccordionHeader, Alert} from "reactstrap";

function CellxgeneHelp(){
    return(
        <div >
            <Alert color="primary">
                <p>We used the cellxgene browser to display cells in different subsets. You may select different datasets
                    from the dropdown menu above. Please <b>wait</b> a few seconds if the browser content was not loaded.</p>
                <p><b>Fill in any desired name </b>in the "User Generated Data Directory" panel to <b>start</b>.</p>
                <p>In this cell browser, you can visualize arbitrary gene's expression levels, display cell-type (anatomy,
                    health status) labels, and perform DEG (differentially expressed genes) test between arbitrarily specified two groups.</p>
            </Alert>
        </div>
    )
}

function IFrameContent({value}) {
    if (value.toString() == 'ch') {
        return (
            <div style={{height: "768"}}>
                <CellxgeneHelp />
                <h5>Displaying chondrocytes and pericyte-like cells</h5>
                <iframe seamless src="http://meni.singlecell.info:5005/view/meniscal_chondrocyte.h5ad/"  width="1366" height="768"></iframe>
            </div>

        )
    }else if (value.toString()=='endo') {
        return (
            <div style={{height: "768"}}>
                <CellxgeneHelp />
                <h5>Displaying endothelial cells</h5>
                <iframe seamless src="http://meni.singlecell.info:5005/view/meniscal_endo.h5ad/"  width="1366" height="768"></iframe>
            </div>
        )
    }else if (value.toString()=='imm') {
        return (
            <div style={{height: "768"}}>
                <CellxgeneHelp />
                <h5>Displaying immune cells</h5>
                <iframe seamless src="http://meni.singlecell.info:5005/view/meniscal_immune.h5ad/"  width="1366" height="768"></iframe>
            </div>
        )
    }else {
        return (
            <div style={{height: "768"}}>
                <CellxgeneHelp />
                <h5>Displaying chondrocytes and pericyte-like cells</h5>
                <iframe seamless src="http://meni.singlecell.info:5005/view/meniscal_chondrocyte.h5ad/"  width="1366" height="768"></iframe>

            </div>
        )
    }
}

export default function Browser() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }
    return (
        <div className="app-container">
            <Dropdown  onSelect={handleSelect}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose a dataset
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    <Dropdown.Item eventKey="ch">Chondrocytes and Pericyte-like cells</Dropdown.Item>
                    <Dropdown.Item eventKey="endo">Endothelial cells</Dropdown.Item>
                    <Dropdown.Item eventKey="imm">Immune cells</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Container style={{ marginTop: 10 }}>
                <IFrameContent value={value} />
                <hr  style={{ marginBottom: 50 }}/>
            </Container>
        </div>
    );
}


