import React, { Suspense } from "react";
import "./App.css";
import Routing from "./routes/index.routes";

function App() {
  return (
    <Suspense fallback={<p>is loading</p>}>
      <Routing></Routing>
    </Suspense>
  );
}

export default App;
