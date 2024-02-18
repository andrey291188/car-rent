import styled from "styled-components";

export const StyledBackdrop = styled.div`
  background-color: rgba(18, 20, 23, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .card-details-container {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 541px;
    background-color: white;
    padding: 35px;
    border-radius: 24px;
    
  }
  
  .img {
    width: 469px;
    border-radius: 20px;
    margin-bottom: 10px;
  }

  .title {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
  }

  .model {
    color: rgb(52, 112, 255);
  }

  .list-car-title {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: left;
    color: rgb(18, 20, 23);
  }

  .list-desc-car {
    color: rgba(18, 20, 23, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
    margin-bottom: 14px;
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

  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    color: rgb(18, 20, 23);
    margin-bottom: 24px;
  }

  .title-acces-func {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    color: rgb(18, 20, 23);
    margin-bottom: 8px;
  }

  .rental-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 8px;
    margin-bottom: 24px;
  }

  .title-rental {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    color: rgb(18, 20, 23);
    margin-bottom: 8px;

  }

  .item-rental {
    width: max-content;
    padding: 7px 14px;
    border-radius: 35px;
    background: rgb(249, 249, 249);

    color: rgb(54, 53, 53);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    
  }

  .meaning {
    color: rgb(52, 112, 255);
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -2%;
  }

  .rental-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: max-content;
    padding: 12px 50px 12px 50px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0%;
    border-radius: 12px;
    background: rgb(52, 112, 255);
    color: white;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;

    overflow: hidden;
    letter-spacing: 1;
  }
`;
