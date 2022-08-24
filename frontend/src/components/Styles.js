import styled from "styled-components";

export const StyledFormButton = styled.button`
  background-color: #dddddd;
  height: 48px;
  float: left;
  color: #888;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  font-weight: 800;
  outline: none;
  font-size: 20px;
  border: none;
  margin-top: 20px;
  box-sizing: border-box;
  &:hover {
    background-color: #ddd;
    color: #888;
    cursor: default;
  }
  &:focus {
    background-color: #ddd;
    color: #888;
    cursor: default;
    outline: none;
  }
  &:active {
    background-color: #ddd;
    color: #888;
    cursor: default;
    outline: none;
  }
`;

export const StyledFormSubmit = styled.input`
  background-color: #a5ce0f;
  color: white;
  cursor: pointer;
  height: 48px;
  border-radius: 4px;
  width: 100%;
  float: left;
  text-align: center;
  box-sizing: border-box;
  font-size: 20px;
  border: none;
  margin-top: 20px;
  font-weight: 800;
  outline: none;
`;


