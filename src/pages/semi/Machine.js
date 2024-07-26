import styled from "styled-components";
import PageHeader from "../../components/headers/PageHeader";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function Machine() {
  return (
    <>
      <PageHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default Machine;
