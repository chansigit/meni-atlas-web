import React from "react";


function Download2() {
    return (
        <div className="download">
            <div className="container">
                <div className="row align-items-center my-5">
                    <h4>Resource download</h4>
                    <hr/>
                    <h5>preprocessed data</h5>
                    <p><i>Chondrocytes and PCL cells:</i> <a href="http://meni.singlecell.info:9000/meniscal_chondrocyte.h5ad">preprocessed scanpy h5ad file</a></p>
                    <p><i>Immune cells:</i> <a href="http://meni.singlecell.info:9000/meniscal_immune.h5ad">preprocessed scanpy h5ad file</a></p>
                    <p><i>Endothelial cells:</i> <a href="http://meni.singlecell.info:9000/meniscal_endo.h5ad">preprocessed scanpy h5ad file</a></p>
                    
                    <h5>Gene sets</h5>
                    <p><i>Cluster markers- full table:</i> <a href="http://meni.singlecell.info:9000/DEG-cluster-marker.xlsx">spreadsheet file</a></p>
                    <p><i>Cluster gene set enrichment analysis - full table:</i> <a href="http://meni.singlecell.info:9000/cluster-enrichtable.xlsx">spreadsheet file</a></p>
                    <p><i>Status specific genes (degenerated v.s. normal):</i> <a href="http://meni.singlecell.info:9000/DEG-degenerated-vs-normal.xlsx">spreadsheet file</a></p>

                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default Download2;

