import styled from "styled-components";
import PageHeader from "../../components/headers/PageHeader";
import { Outlet } from "react-router-dom";
import CurrentNav from "../../components/CurrentNav";

function About() {
  return (
    <>
      <PageHeader />
      <CurrentNav />
      <Outlet />
    </>
  );
}

export default About;
