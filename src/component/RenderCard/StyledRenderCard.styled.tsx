import styled from "styled-components";

export const StyledWrapperCard = styled.li`
  width: 274px;
  position: relative;

  .img {
    border-radius: 20px;
    margin-bottom: 14px;
  }
  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    margin-bottom: 8px;
  }
  .list-car-title {
    display: flex;
    align-items: center;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    color: rgb(18, 20, 23);
  }

  .list-desc-car {
    color: rgba(18, 20, 23, 0.5);
    font-family: Manrope;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 28px;
  }

  
  .item-desc-car:not(:first-child) {
    margin-left: 6px;
  }
  
  .item-desc-car:not(:last-child) {
    margin-right: 6px;
  }
  
  .container-desc {
    display: flex;
  }
  
  .vector {
    margin: 0px 0px;
    border: 1px solid rgba(18, 20, 23, 0.1);
  }

  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
    border-radius: 12px;
    color: white;
    background: rgb(52, 112, 255);
  }

  .favorite-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;

    border: none;
    border-radius: 50%;
    outline: none;
    background: none;
    color: #fff;
    text-decoration: none;

    overflow: hidden;
    letter-spacing: 1;
  }
`;
