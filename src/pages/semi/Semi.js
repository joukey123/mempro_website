import styled from "styled-components";
import PageHeader from "../../components/headers/PageHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Semi() {
  return (
    <>
      <PageHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default Semi;
