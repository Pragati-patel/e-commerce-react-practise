import React, { useState, useEffect, useContext, createContext } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaRegImages } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePrimaryContextProvider } from "../../context/primaryContext";

export default function Images({}) {
  const {
    setuser,
    setSelected: choose,
    selected: choosen,
  } = usePrimaryContextProvider();

  const navigate = useNavigate();

  const imageArr = Array(50)
    .fill()
    .map((_, i) => ({ EmpId: i, Name: "Employee", Address: "Indore" }));

  const [page, setPage] = useState(1);
  const [images, setImages] = useState(imageArr.slice(page - 1, 10));
  const [currentPage, setcurrentPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState("");

  const paginationLength = imageArr.length / 10;
  const paginationArr = Array(paginationLength)
    .fill()
    .map((_, i) => i + 1);

    useEffect(() => {
      if(choosen) {
        let newItems = [...imageArr]
        choosen.forEach(element => {
          newItems = newItems.filter(item => +item.EmpId !== +element.EmpId)
          newItems.push(element)
        })
        newItems.sort((a,b) => a.EmpId>b.EmpId ? 1 : -1)
        setImages(newItems)
      }
    },[])

  const handlePage = (page, index) => {
    setcurrentPage(index);
    setPage(page);
    setImages(imageArr.slice((page - 1) * 10, page * 10));
  };

  const handleImage = (v, i) => {
    if (selected.includes(v)) {
      setSelected(selected.filter((item) => item !== v));
      choose(selected.filter((item) => item !== v))
    } else
    {
      setSelected([...selected, v]);
      choose([...selected, v]);
    } 
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSave = (event) => {
    event.stopPropagation();
    setuser(input);
    setInput("");
  };

  return (
    <>
      <div
        className="inline-flex ml-4 mt-8 cursor-pointer"
        onClick={() =>
          navigate("/selectedimages", {
            state: { selected: selected },
          })
        }
      >
        Selected Images <FaRegImages size={"1.5rem"} className="mx-2" />
        {selected.length}
      </div>
      <div
        className="inline-flex ml-4 mt-8 cursor-pointer"
        onClick={() =>
          navigate("/selecteddatatable", { state: { selected: selected } })
        }
      >
        Show selected images's data{" "}
        <FaRegImages size={"1.5rem"} className="mx-2" />
      </div>
      <div className="flex flex-wrap  ">
        <div className="flex flex-wrap">
          {images?.map((v, i) => {
            return (
              <div
                className="flex flex-wrap flex-col w-40 h-40 hover:drop-shadow-xl  rounded-3xl justify-center items-center  m-4   hover:border-x-fuchsia-500"
                style={
                  selected.includes(v)
                    ? {
                        background: " linear-gradient(#e66465, #9198e5)",
                        color: "white",
                      }
                    : {
                        background:
                          "linear-gradient(90deg, #FFECD2 0%, #FCB69F 100%)",
                      }
                }
                onClick={() => handleImage(v, i)}
              >
                {i == 0 ? (
                  <div className="flex justify-center mt-2">
                    <input
                      type="text"
                      placeholder="user"
                      className="flex w-60 text-xl px-2"
                      onChange={handleChange}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                      value={input}
                    />
                    <button
                      className="flex text-xl px-2 justify-center items-center z-10 bg-slate-300"
                      onClick={handleSave}
                    >
                      save
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <p>
                      <span className="font-semibold"> Employee Id </span>:{" "}
                      {v.EmpId}
                    </p>
                    <p>
                      <span className="font-semibold">Name </span>: {v.Name}
                    </p>
                    <p>
                      <span className="font-semibold">Address </span>:{" "}
                      {v.Address}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end mr-8 items-center">
        {currentPage != 0 ? (
          <AiOutlineLeft
            size={"1.5rem"}
            className="cursor-pointer"
            onClick={() => {
              handlePage(page - 1, currentPage - 1);
            }}
          />
        ) : null}

        {paginationArr?.map((page, index) => {
          return (
            <div
              // className="flex flex-wrap w-8 h-8 hover:drop-shadow-xl  focus:bg-green-500 visited:bg-green-500 justify-center items-center cursor-pointer text-2xl my-4 mx-2 bg-slate-300"
              className={`flex flex-wrap w-8 h-8 hover:drop-shadow-xl ${
                currentPage === index ? "bg-green-500" : "bg-slate-300"
              } focus:bg-green-500 visited:bg-green-500 justify-center items-center cursor-pointer text-2xl my-4 mx-2 `}
              onClick={() => handlePage(page, index)}
              // style={{ background: currentPage === index ? 'red' : 'green'}}
            >
              {page}
            </div>
          );
        })}
        {currentPage != 4 ? (
          <AiOutlineRight
            size={"1.5rem"}
            className="cursor-pointer"
            onClick={() => handlePage(page + 1, currentPage + 1)}
          />
        ) : null}
      </div>
    </>
  );
}
