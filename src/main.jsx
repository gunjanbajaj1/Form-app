// 1. Import the extendTheme function
import * as ReactDOM from "react-dom/client";
import FormV1 from "./component/FormV1";
import * as React from "react";


const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <>
    <FormV1 />
  </>
);
