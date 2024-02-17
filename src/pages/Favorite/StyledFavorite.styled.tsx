import styled from "styled-components";

export const StyledSection = styled.section`
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
`;
