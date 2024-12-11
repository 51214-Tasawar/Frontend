import React, { useState } from "react";
import Auth from "./auth";
import Index from "..";
import { Route, Routes, useLocation } from "react-router-dom";
import Products from "../product";
import Homepage from "./Products.jsx/Home";
import ContactUs from "./Products.jsx/ContactUs";
import AboutUs from "./Products.jsx/About";
import Services from "./Products.jsx/Services";
import Create from "./Products.jsx/create";
import Get from "./Products.jsx/get";
import Layout from "./layouts/layout";

const App=()=>{
  
  const location = useLocation() ;

  const pathnm = location.pathname ==="/"

  return (
    <>
    {pathnm ? (
          <Routes>
          <Route index element={<Auth/>}/>
          </Routes>
        ) :
      (
      <Layout>
     <Routes>
      <Route path="index" element={<Index/>}></Route>
      <Route path="product" element={<Products/>}>
      <Route path="create-Product" element={<Create/>}></Route>
      <Route path="get-Product" element={<Get/>}></Route>
      </Route>
     </Routes>
      </Layout> 
      )
   }
    </>
  )
}
export default App