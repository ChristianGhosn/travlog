import React from "react";

const PageCounter = ({ active }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        fill={active ? "#F85E9F" : "#191825"}
        fillOpacity={active ? 1 : 0.05}
      />
    </svg>
  );
};

export default PageCounter;
