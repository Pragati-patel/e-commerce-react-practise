import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTable } from "react-table/dist/react-table.development";
import { FiEdit } from "react-icons/fi";
import "./table.css";

export default function SelectedDataTable() {
  const location = useLocation();
  console.log("state", location?.state);
  const selectedData = location?.state?.selected;
  console.log("selected data ", selectedData);
  const icon = <FiEdit />;
  const columnsHeader = [
    {
      Header: "Employee Id",
      accessor: "EmpId",
    },
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Address",
      accessor: "Address",
    },
    {
      Header: "Edit",
      accessor: "icon",
    },
  ];

  const columns = useMemo(() => columnsHeader, []);
  const data = useMemo(() => selectedData, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  console.log("trans", tableInstance);
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {/* {`${JSON.stringify(headerGroups)}`} */}
            {headerGroup.headers.map((column) => {
              return (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {/* {console.log("rows", rows)} */}
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <>
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
              {/* <FiEdit /> */}
            </>
          );
        })}
      </tbody>
    </table>
  );
}
