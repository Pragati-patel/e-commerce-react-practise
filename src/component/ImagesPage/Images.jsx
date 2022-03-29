import React, { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaRegImages } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Images({ changeUser }) {
  const navigate = useNavigate();

  const imageArr = Array(50)
    .fill()
    .map((_, i) => i + 1);

  const [page, setPage] = useState(1);
  const [images, setImages] = useState(imageArr.slice(page - 1, 10));
  const [currentPage, setcurrentPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState("");

  const paginationLength = imageArr.length / 10;
  const paginationArr = Array(paginationLength)
    .fill()
    .map((_, i) => i + 1);

  const handlePage = (page, index) => {
    // console.log("index", index);
    setcurrentPage(index);
    setPage(page);
    setImages(imageArr.slice((page - 1) * 10, page * 10));
  };

  const handleImage = (v, i) => {
    console.log(i);
    setSelected([...selected, v]);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleSave = (event) => {
    event.stopPropagation();
    console.log("save");
    changeUser(input);
    setInput("");
  };
  useEffect(() => {
    console.log("input", input);
  }, [input]);
  useEffect(() => {
    console.log("images", imageArr);
    console.log("value", page);
    console.log("selected", selected);
  }, [page, selected]);

  return (
    <>
      <div
        className="inline-flex ml-4 mt-8 cursor-pointer"
        onClick={() =>
          navigate("/selectedimages", {
            state: { selected: selected, fun: "ok" },
          })
        }
      >
        Selected Images <FaRegImages size={"1.5rem"} className="mx-2" />
        {selected.length}
      </div>
      <div className="flex flex-wrap  ">
        <div className="flex flex-wrap">
          {images?.map((v, i) => {
            return (
              <div
                className="flex flex-wrap flex-col w-40 h-40 hover:drop-shadow-xl  rounded-3xl justify-center items-center  text-4xl m-4   hover:border-x-fuchsia-500"
                style={{
                  background:
                    "linear-gradient(90deg, #FFECD2 0%, #FCB69F 100%)",
                }}
                onClick={() => handleImage(v, i)}
              >
                {v}
                {i == 0 ? (
                  <div className="flex justify-center mt-2">
                    <input
                      type="text"
                      placeholder="user"
                      className="flex w-60 text-xl px-2"
                      onChange={handleChange}
                      value={input}
                    />
                    <button
                      className="flex text-xl px-2 justify-center items-center z-10 bg-slate-300"
                      onClick={handleSave}
                    >
                      save
                    </button>
                  </div>
                ) : null}
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