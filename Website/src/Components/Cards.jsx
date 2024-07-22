import React from "react";

function Cards() {
  return (
    <div className="w-full h-full bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center jutify-center rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2019-2023
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center jutify-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2019-2023
          </button>
        </div>
        <div className="card relative flex items-center jutify-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute px-5 py-1 border-2 left-10 rounded-full bottom-10">
            &copy;2019-2023
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
