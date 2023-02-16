import React from "react";

const Paginations = (props) => {
  // console.log(props);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalDatas / props.datasPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);

  const PageNumbers = pageNumbers.map((e, i) => {
    // console.log(e);
    return (
      <div
        key={i}
        onClick={() => props.paginate(e)}
        className="hover:opacity-50"
      >
        <div className="cursor-pointer border border-[blue] px-1 mx-1 my-1 ">
          <div>{e}</div>
        </div>
      </div>
    );
  });
  return <div className="flex justify-center">{PageNumbers}</div>;
};

export default Paginations;