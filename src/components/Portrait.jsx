import React from 'react';
import myViewConfig from "./vitessce_config_220404.json";
import { Vitessce } from 'vitessce';
import 'vitessce/dist/es/production/static/css/index.css';

export default function Portrait() {
    return (
        <div style={{ padding: "1rem 0" }}>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <div style={{height: "200px", backgroundColor:"red"}}>
                <Vitessce
                    config={myViewConfig}
                    height={800}
                    width={400}
                    theme="light"
                />
            </div>

            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2> <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2> <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
        </div>
    );
}