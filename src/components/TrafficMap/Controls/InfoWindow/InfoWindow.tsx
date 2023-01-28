import React, { useState } from "react";
import "./InfoWindow.scss";
import { AiOutlineExclamation } from "react-icons/ai";

const InfoWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`info-c ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <p>Click on congestion marks to see the corresponding route</p>
      ) : (
        <AiOutlineExclamation />
      )}
    </div>
  );
};

export default InfoWindow;
