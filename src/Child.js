import React, { useContext } from "react";
import { themeContext } from "./App";

const Child = () => {
  const useCont = useContext(themeContext);

  console.log(useCont);

  return (
    <>
      {useCont === "light" ? (
        <h1>This is {useCont} mode</h1>
      ) : (
        <h1>This is {useCont} mode</h1>
      )}
    </>
  );
};

export default Child;
