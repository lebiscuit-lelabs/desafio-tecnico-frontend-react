import React from "react";
import Routes from "./routes/Routes";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

import "./styles/Global.scss";
import "./styles/Header.scss";
import "./styles/Houses.scss";
import "./styles/CharacterCard.scss";

const App = () => (
  <>
    <Routes />
    <Toaster />
  </>
);

export default App;
