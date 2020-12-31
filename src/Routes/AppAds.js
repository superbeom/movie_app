import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import { text } from "../text.json";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: "row";
`;

export default () => {
  return (
    <>
      <Helmet>
        <title>app-ads</title>
      </Helmet>
      <MainContainer>{text}</MainContainer>
    </>
  );
};
