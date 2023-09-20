// 1. Import the extendTheme function
import * as ReactDOM from "react-dom/client";
import FormV1 from "./component/FormV1";
import * as React from "react";
import "./component/FormV1.css";
import Parent from "./component/Parent";


const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <>
    <Parent />
  </>
);
