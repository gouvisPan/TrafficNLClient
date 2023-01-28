import React, { CSSProperties } from "react";
import { ClockLoader } from "react-spinners";

import "./Spinner.scss";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Spinner = () => {
  return (
    <div className="spinner-loader">
      <ClockLoader cssOverride={override} color="#FFF" />
    </div>
  );
};

export default Spinner;
