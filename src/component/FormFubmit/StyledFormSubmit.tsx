import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  .form {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    align-items: flex-end;
  }
  .form-input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .form-label {
    font-size: 14px;
    text-align: left;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0%;
    color: rgb(138, 138, 137);
  }
  .form-field {
    align-items: center;
    padding: 14px 69px 14px 18px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;
    border-radius: 14px;
    border: none;
    outline: none;
    background: rgb(247, 247, 251);
    margin-right: 18px;
    height: 47px;
  }

  .form select  {
    box-sizing: border-box;
    border: 1px solid rgba(18, 20, 23, 0.05);
    border-radius: 14px;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    background: rgb(247, 247, 251);
  }

  .form select::-webkit-scrollbar {
    width: 8px;
  }

  .form select::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #ccc;
  }

  .form select::-webkit-scrollbar-track {
    background-color: #ccc;
    background: rgba(18, 20, 23, 0.05)
  }

  .button-search {
    width: 136px;
    height: 47px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 44px 14px 44px;
    border-radius: 12px;
    background: rgb(52, 112, 255);
  }
`;
