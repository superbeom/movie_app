import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: "row";
`;

const ImageBox = styled.div`
  width: 300px;
  height: 650px;
  background-color: ${(props) => props.theme.yellowColor};
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Image = styled.img`
  width: inherit;
  max-width: 100%;
  height: 100%;
`;

export default () => {
  return (
    <>
      <Helmet>
        <title>Memory Matching Game</title>
      </Helmet>
      <MainContainer>
        <ImageBox>
          <Image
            src={require("../images/mmg_6.5'_screenshot_1.png")}
            alt="Screenshot 1"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/mmg_6.5'_screenshot_2.png")}
            alt="Screenshot 2"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/mmg_6.5'_screenshot_3.png")}
            alt="Screenshot 3"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/mmg_6.5'_screenshot_4.png")}
            alt="Screenshot 4"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/mmg_6.5'_screenshot_5.png")}
            alt="Screenshot 5"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/mmg_6.5'_screenshot_6.png")}
            alt="Screenshot 6"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/mmg_6.5'_screenshot_7.png")}
            alt="Screenshot 7"
          />
        </ImageBox>
        <ImageBox>
          <Image
            src={require("../images/mmg_6.5'_screenshot_8.png")}
            alt="Screenshot 8"
          />
        </ImageBox>
      </MainContainer>
    </>
  );
};
