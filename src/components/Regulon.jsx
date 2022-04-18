import React from 'react';
import myViewConfig from "./vitessce_config_220404.json";
import { Vitessce } from 'vitessce';
import 'vitessce/dist/es/production/static/css/index.css';
import {Container} from 'reactstrap'

import Graph from "react-graph-vis";


export default function Portrait() {
    const graph = {
        nodes: [
            { id: 1, label: "Node 1", title: "node 1 tootip text" },
            { id: 2, label: "Node 2", title: "node 2 tootip text" },
            { id: 3, label: "Node 3", title: "node 3 tootip text" },
            { id: 4, label: "Node 4", title: "node 4 tootip text" },
            { id: 5, label: "Node 5", title: "node 5 tootip text" }
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
        ]
    };

    const options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        height: "500px"
    };

    const events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
    };


    return (
        <Container style={{ marginTop:100 }}>
            <div style={{ padding: "1rem 0" }}>
                <h2>画像</h2>

                <div style={{height: "200px"}}>
                    <Vitessce id={'regulonvitessce'}
                        config={myViewConfig}
                        height={800}
                        width={400}
                        theme="light"
                    />
                </div>

                <Graph
                    graph={graph}
                    options={options}
                    events={events}
                    getNetwork={network => {
                        //  if you want access to vis.js network api you can set the state in a parent component using this property
                    }}
                />

                <h2>画像</h2>
                <h2>画像</h2>
                <h2>画像</h2>
                <h2>画像</h2>
                <h2>画像</h2>
            </div>
        </Container>
    );
}