import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTable } from "react-table/dist/react-table.development";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import "./table.css";
import Modal from "react-modal";
import { usePrimaryContextProvider } from "../../context/primaryContext";

export default function SelectedDataTable() {
const {selected:selectedData, setSelected}=usePrimaryContextProvider()

  const location = useLocation();
  // const selectedData = location?.state?.selected;
  let subtitle;
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [inputChange, setInputChange] = useState(selectedData);
  const [modalInput, setModalInput] = useState(selectedData);
  const [index, setIndex] = useState();
let originalData = []
  useEffect(() => {
    let originalData = []
  }, [selectedData, modalInput]);

  const openModal = (i) => {
    setmodalIsOpen(true);
    setIndex(i);
   
  };
  const closeModal = () => {
    setmodalIsOpen(false);
  };
  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };
  const handleInputChange = (e) => {
    const tempState = [...selectedData];
    let key = e.target.name;
    let value = e.target.value;
    tempState[index][key] = value;
    setInputChange(tempState);
    setSelected(tempState);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setModalInput(inputChange);
    closeModal();
  };

  let newSel = modalInput.map((item, i) => ({
    ...item,
    icon: (
      <FiEdit style={{ display: "initial" }} onClick={() => openModal(i)} />
    ),
  }));

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
  const data = useMemo(() => newSel);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      padding: "1rem 3rem",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    },
  };


  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <>
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => {
                  return (
                    <td {...cell.getCellProps()} key={i}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <div className="modal_wrap">
                  <div className="modal_heading">
                    <h2>
                      <b>Edit Info</b>
                    </h2>
                    <IoClose size={"1.5em"} onClick={closeModal} />
                  </div>
                  <form className="modal_form">
                    <label>Employee Id</label>
                    <input
                      type="number"
                      placeholder={selectedData[index]?.EmpId}
                      name="EmpId"
                      onChange={handleInputChange}
                    />
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder={selectedData[index]?.Name}
                      name="Name"
                      
                      onChange={handleInputChange}
                    />
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder={selectedData[index]?.Address}
                      name="Address"
                      onChange={handleInputChange}
                    />
                    <button
                      className="modal_submit"
                      onClick={handleInputSubmit}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </Modal>
            </>
          );
        })}
      </tbody>
    </table>
  );
}
