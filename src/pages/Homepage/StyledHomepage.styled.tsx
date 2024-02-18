import styled from "styled-components";
import backgroundImage from "../../imgFolder/109.png";

export const StyledHomepageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 86vh;
  padding-top: 150px;
  padding-left: 15px;
  padding-right: 15px;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0%;
    color: white;
    margin-bottom: 30px;
  }

  .desc {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    color: white;
    margin-bottom: 60px;
  }

  .button {
    border-radius: 5px;
    padding: 10px;
    font-size: 28px;
    font-weight: 500;
    background-color: rgb(52, 112, 255);
    border: 2px solid white;
    color: white;
  }
`;
