import styled from "styled-components";
import PageHeader from "../../components/headers/PageHeader";
import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
}

export default About;
