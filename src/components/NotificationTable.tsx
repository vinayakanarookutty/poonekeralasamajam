import React, { useState, useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { Container, Table, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={globalFilter || ''}
        onChange={e => setGlobalFilter(e.target.value || undefined)}
        placeholder="Search..."
        aria-label="Search"
      />
    </InputGroup>
  );
}

function NotificationTable({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Message',
        accessor: 'message',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <Container>
      <GlobalFilter  globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default NotificationTable;
