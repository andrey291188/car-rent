import styled from "styled-components";

export const StyledSection = styled.section`
  padding-top: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  .list-card-auto {
    width: 1183px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;

    @media (max-width: 1184px) {
      width: 880px;
    }

    @media (max-width: 879px) {
      width: 577px;
    }

    @media (max-width: 576px) {
      width: 274px;
    }
  }

  .button-load-more {
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 150px;
    color: rgb(52, 112, 255);
    background-color: transparent;
  }
  
  .no-car {
      width: 100%;
      text-align: center;
      font-size: 28px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0%;
    }
`;
