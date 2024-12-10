import React, { useState } from "react";
import Auth from "./auth";
import Index from "..";
import { Route, Routes } from "react-router-dom";
import Products from "../product";
import Homepage from "./Products.jsx/Home";
import ContactUs from "./Products.jsx/ContactUs";
import AboutUs from "./Products.jsx/About";
import Services from "./Products.jsx/Services";
import Create from "./Products.jsx/create";
import Get from "./Products.jsx/get";
import Layout from "./layouts/layout";

const App=()=>{
  
  return(
    <>
    <div>
      <Layout />
   </div>
    </>
  )
}
export default App