import React from "react";

const Paginations = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalDatas / props.datasPerPage); i++) {
    pageNumbers.push(i);
  }

  const PageNumbers = pageNumbers.map((e, i) => {
    if (props.check == 0) {
      props.setdataPerPage(5)
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
    } else if (props.check == 5) {
      props.setdataPerPage(props.totalDatas)
      return (
        <div key={i}>
        </div>
      );
    } else {
      return (<div key={i}>

      </div>)
    }
  });

  return <div className="flex justify-center">{PageNumbers}</div>;
};

export default Paginations;