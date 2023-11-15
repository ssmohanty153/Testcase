import React from "react";
import { createRoot } from "react-dom";
import App from "./App";


const el = document.getElementById("app");

const root = createRoot(el);
root.render(<App />);
