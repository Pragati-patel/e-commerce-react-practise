import React from "react";
import { useLocation } from "react-router-dom";

export default function SelectedImages(props) {
  const location = useLocation();
  console.log("state",location?.state)
  const selectedArr = location?.state?.selected
  console.log("selectedArr",selectedArr?.selected);
  return (
    <div className="flex flex-wrap">
      {selectedArr?.map((value,index) => {
        return (
          <div
            className="flex w-40 h-40 hover:drop-shadow-xl  rounded-3xl justify-center items-center  text-4xl m-4   hover:border-x-fuchsia-500"
            style={{
              background: "linear-gradient(90deg, #FFECD2 0%, #FCB69F 100%)",
            }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
}
