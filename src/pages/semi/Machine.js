import styled from "styled-components";
import PageHeader from "../../components/headers/PageHeader";
import { Outlet } from "react-router-dom";

function Machine() {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}

export default Machine;
