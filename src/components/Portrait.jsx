import React, {useEffect, useState, useMemo, Fragment} from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { Table, Row, Col, Button, Input, Alert, List} from "reactstrap"
import {Container} from 'reactstrap'
import {Filter, DefaultColumnFilter} from './portrait_filter'
import "bootstrap/dist/css/bootstrap.min.css"

// implementation
// from https://medium.com/@thewidlarzgroup/react-table-7-sorting-filtering-pagination-and-more-6bc28af104d6

const TableContainer = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows, -> we change 'rows' to 'page'
        page,
        prepareRow,
        // below new props related to 'usePagination' hook
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        {
            columns,
            data,
            defaultColumn: { Filter: DefaultColumnFilter },
            initialState: { pageIndex: 0, pageSize: 10 }
        },
        useFilters,
        useSortBy,
        usePagination
    );

    const generateSortingIndicator = column => {
        return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
    }

    // create two helper function to handle text input
    const onChangeInSelect = event => {
        setPageSize(Number(event.target.value))
    }

    const onChangeInInput = event => {
        const page = event.target.value ? Number(event.target.value) - 1 : 0
        gotoPage(page)
    }

    return (
        // If you're curious what props we get as a result of calling our getter functions (getTableProps(), getRowProps())
        // Feel free to use console.log()  This will help you better understand how react table works underhood.
        <Fragment>
            <Table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                <div {...column.getSortByToggleProps()}>
                                    {column.render("Header")}
                                    {generateSortingIndicator(column)}
                                </div>
                                <Filter column={column} />
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                {page.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <Row style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
                <Col md={3}>
                    <Button
                        color="primary"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {"<<"}
                    </Button>
                    <Button
                        color="primary"
                        onClick={previousPage}
                        disabled={!canPreviousPage}
                    >
                        {"<"}
                    </Button>
                </Col>
                <Col md={2} style={{ marginTop: 7 }}>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </Col>
                <Col md={2}>
                    <Input
                        type="number"
                        min={1}
                        style={{ width: 70 }}
                        max={pageOptions.length}
                        defaultValue={pageIndex + 1}
                        onChange={onChangeInInput}
                    />
                </Col>
                <Col md={2}>
                    <Input type="select" value={pageSize} onChange={onChangeInSelect}>
                        >
                        {[10, 20, 30, 40, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </Input>
                </Col>
                <Col md={3}>
                    <Button color="primary" onClick={nextPage} disabled={!canNextPage}>
                        {">"}
                    </Button>
                    <Button
                        color="primary"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {">>"}
                    </Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default function Portrait(){
    // fetch data back from url
    //// useEffect is a tool to perform side-effect inside a function
    const [data_deg, setData_deg] = useState([])
    useEffect(() => {
        const doFetch = async () => {
            const response = await fetch("http://meni.singlecell.info:9000/ch_pcl_markers.json")
            const body = await response.json()
            const DEGs = body.results
            console.log(DEGs)
            setData_deg(DEGs)
        }
        doFetch()
    }, [])

    const [data_enrich, setData_enrich] = useState([])
    useEffect(() => {
        const doFetch = async () => {
            const response = await fetch("http://meni.singlecell.info:9000/ch_pcl_enrich.json")
            const body = await response.json()
            const enriched = body.results
            console.log(enriched)
            setData_enrich(enriched)
        }
        doFetch()
    }, [])

    // define table columns
    //// useMemo is another side-effect tool, which stores function evaluation results
    const columns_DEG = useMemo(
        () => [
            {
                Header: "Gene",
                accessor: "gene",
                disableSortBy: true
            },
            {
                Header: "Cell type",
                accessor: "cluster"
            },
            {
                Header: "average log2FC",
                accessor: "avg_log2FC",
            },
            {
                Header: "Percent in 1",
                accessor: "pct1",
            },
            {
                Header: "Percent in 2",
                accessor: "pct2",
            },
            {
                Header: "Percent difference",
                accessor: "pct_diff",
            },
            {
                Header: "Adjusted P value",
                accessor: "p_val_adj",
            },
            {
                Header: "P value",
                accessor: "p_val",
            }

        ],
        []
    )
    const columns_enrich = useMemo(
        () => [
            {
                Header: "Gene set ID",
                accessor: "ID",
                disableSortBy: false
            },
            {
                Header: "Term type",
                accessor: "ONTOLOGY",
                disableSortBy: false
            },
            {
                Header: "Description",
                accessor: "Description",
                disableSortBy: true
            },
            {
                Header: "Cell type",
                accessor: "Cluster",
            },
            {
                Header: "Gene Ratio",
                accessor: "GeneRatio",
            },
            {
                Header: "Background Ratio",
                accessor: "BgRatio",
            },
            {
                Header: "P value",
                accessor: "p_val",
            },
            {
                Header: "Adjusted P value",
                accessor: "p_val_adj",
            },
            {
                Header: "Enriched Genes",
                accessor: "geneID",
            },
            {
                Header: "Count",
                accessor: "Count",
            }

        ],
        []
    )
    return (
        <Container style={{ marginTop: 30 }}>
            <h4>Cell type portraits of meniscal cells</h4>
            <p>We aim to build a molecular portrait of cells in human meniscus, recording signature expression patterns
            in different cell states and revealing key biological functions.</p>
            <hr  style={{ marginBottom: 50 }}/>

            <h4>Cell-type marker genes</h4>
            <Alert color="primary">
                <p>The table below displays the differentially expressed genes (DEGs) identified
                    for each cell type using the "one cell-type v.s. all the others" scheme.</p>

                <List type="unstyled">
                    <li>
                        The displayed marker genes covers the following cell types:
                        <ul>
                            <li>
                                Ch.1 : Chondrocyte.1 (CHAD)
                            </li>
                            <li>
                                Ch.2 : Chondrocyte.2 (FNDC1)
                            </li>
                            <li>
                                Ch.3 : Chondrocyte.3 (PRG4)
                            </li>
                            <li>
                                Ch.4 : Chondrocyte.4 (CFD)
                            </li>
                            <li>
                                Ch.5 : Chondrocyte.5 (cycling)
                            </li>
                            <li>
                                PCL.1 : Pericyte-like cells 1
                            </li>
                            <li>
                                PCL.2 : Pericyte-like cells 2
                            </li>
                        </ul>
                    </li>
                </List>

                <p>Gene symbols, p values, associated cell types, expressing percentages are
                    listed in the table. The table can be <b>sorted by clicking</b> the column titles.
                    Records in the table can be <b>filtered by filling the input box</b> below the column titles.
                </p>
            </Alert>
            <TableContainer columns={columns_DEG} data={data_deg} />
            <hr  style={{ marginBottom: 50 }}/>

            <h4>Enriched gene sets of each cell-type</h4>
            <Alert color="info">
                <p>The table below displays the enriched gene sets derived from the
                    gene over-representation analysis methods.</p>


                <p>Enriched term names, p values, corresponding cell types, enriched genes and their ratios are
                    listed in the table. The table can be <b>sorted by clicking</b> the column titles.
                    Records in the table can be <b>filtered by filling the input box</b> below the column titles.
                </p>
            </Alert>
            <TableContainer columns={columns_enrich} data={data_enrich} />
            <hr  style={{ marginBottom: 50 }}/>
        </Container>
    )
}