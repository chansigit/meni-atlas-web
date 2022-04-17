import React, {useEffect, useState, useMemo, Fragment} from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { Table, Row, Col, Button, Input } from "reactstrap"
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
    const [data, setData] = useState([])
    useEffect(() => {
        const doFetch = async () => {
            const response = await fetch("https://randomuser.me/api/?results=100")
            const body = await response.json()
            const contacts = body.results
            //console.log(contacts)
            setData(contacts)
        }
        doFetch()
    }, [])

    // define table columns
    //// useMemo is another side-effect tool, which stores function evaluation results
    const columns = useMemo(
        () => [
            {
                Header: "Title",
                accessor: "name.title",
                disableSortBy: true
            },
            {
                Header: "First Name",
                accessor: "name.first",
            },
            {
                Header: "Last Name",
                accessor: "name.last",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "City",
                accessor: "location.city",
            },
            {
                Header : "Hemisphere",
                disableFilters: true,
                accessor: (values) => {
                    const { latitude, longitude } = values.location.coordinates;
                    const first = Number(latitude) > 0 ? 'N' : 'S';
                    const second = Number(longitude) > 0 ? 'E' : 'W';
                    return first + '/' + second;
                },

                // we can also write code below as a separate React Component
                Cell: ({ cell }) => {
                    const { value } = cell;
                    const pickEmoji = (value) => {
                        let first = value[0]; // N or S
                        let second = value[2]; // E or W
                        const options = ['⇖', '⇗', '⇙', '⇘'];
                        let num = first === 'N' ? 0 : 2;
                        num = second === 'E' ? num + 1 : num;
                        return options[num];
                    };
                    return (
                        <div style={{ textAlign: 'center', fontSize: 18 }}>
                            {pickEmoji(value)}
                        </div>
                    );
                }
            }
        ],
        []
    )
    return (
        <Container style={{ marginTop: 100 }}>
            <TableContainer columns={columns} data={data} />
        </Container>
    )
}

/*
export default function Portrait() {
    return (
        <div style={{ padding: "1rem 0" }}>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <h2>画像</h2>
            <div style={{height: "200px", backgroundColor:"red"}}>

            </div>

            <h2>画像</h2>
            <h2>画像</h2>

        </div>
    );
}*/
