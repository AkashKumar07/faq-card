import React, { useState, useEffect, useRef } from "react";
import arrow from "../assets/images/arrowDown.svg";

const Accordian = (props) => {
  const { q, a } = props;
  const [view, setView] = useState(false);

  //detect click outside the component
  const node = useRef();

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setView(false);
  };

  return (
    <div className="accordian" onClick={() => setView(!view)} ref={node}>
      <div className="accordian__question">
        <p
          className={
            !view
              ? "accordian__question-notActive"
              : "accordian__question-active"
          }
        >
          {q}
        </p>
        <img
          src={arrow}
          alt="arrow"
          className={view ? "arrow-active" : "arrow"}
        />
      </div>
      {view ? (
        <div className="accordian__answer">
          <p>{a}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Accordian;
