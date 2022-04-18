import {Nav, NavItem, NavLink, Row, Col, TabContent, TabPane, Card, CardText, CardTitle, Button} from "reactstrap";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Contact, Download, Footer, Home, Navigation, Portrait, Regulon, Resource, Resources} from "./component_export";

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {Container} from 'reactstrap'
import {Accordion, AccordionBody,AccordionItem,  AccordionHeader} from "reactstrap";

function CellxgeneHelp(){
    return(
        <div>
            <Accordion
                open="1"
                toggle={function noRefCheck(){}}
            >
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        Cellxgene Browser Help
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        <strong>
                            💧This is the first item's accordion body.
                        </strong>
                        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                        <code>
                            .accordion-body
                        </code>
                        , though the transition does limit overflow.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">
                        Accordion Item 2
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <strong>
                            This is the second item's accordion body.
                        </strong>
                        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                        <code>
                            .accordion-body
                        </code>
                        , though the transition does limit overflow.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">
                        Accordion Item 3
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                        <strong>
                            This is the third item's accordion body.
                        </strong>
                        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                        <code>
                            .accordion-body
                        </code>
                        , though the transition does limit overflow.
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

function IFrameContent({value}) {
    if (value.toString() == 'ch') {
        return (
            <div style={{height: "768"}}>
                <h5>Displaying chondrocytes and pericyte-like cells</h5>
                <iframe seamless src="http://localhost:9001"  width="1366" height="768"></iframe>
                <CellxgeneHelp />
            </div>

        )
    }else if (value.toString()=='endo') {
        return (
            <div style={{height: "768"}}>
                <h5>Displaying endothelial cells</h5>
                <iframe seamless src="http://localhost:9002"  width="1366" height="768"></iframe>
                <CellxgeneHelp />
            </div>
        )
    }else if (value.toString()=='imm') {
        return (
            <div style={{height: "768"}}>
                <h5>Displaying immune cells</h5>
                <iframe seamless src="http://localhost:9003"  width="1366" height="768"></iframe>
                <CellxgeneHelp />
            </div>
        )
    }else {
        return (
            <div style={{height: "768"}}>
                <h5>Displaying chondrocytes and pericyte-like cells</h5>
                <iframe seamless src="http://localhost:9001"  width="1366" height="768"></iframe>
                <CellxgeneHelp />
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
            </Container>
        </div>
    );
}


