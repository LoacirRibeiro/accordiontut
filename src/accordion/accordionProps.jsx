import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";

function AccordionProps({ title, desc, active, setActive }) {
  return (
    <div className="singleContainer">
      <span
        className={(active === title ? "activeTitle" : "") + " heading" + " flex"}
      >
        {title}
        <span className="headingIcon" onClick={() => setActive(title)}>
          {active === title ? (
            <BsArrowDownCircle className="icon" />
          ) : (
            <BsArrowUpCircle className="icon" />
          )}
        </span>
      </span>
      <p className={(active === title ? "show" : "") + " description"}>{desc}</p>
    </div>
  );
}

export default AccordionProps;
