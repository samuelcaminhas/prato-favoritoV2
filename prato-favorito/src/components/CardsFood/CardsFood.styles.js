import styled from "styled-components"

export const View = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  box-shadow: 0 0 10px #ccc;
  border-radius: 20px;
  padding: 0 20px;
  margin: 20px 10px;
  font-size: 15px;
  
  > div:first-child {
    display: flex;
    align-items: center;
    gap: 20px;
    > img {
      width: 70px;
      height: 70px;
      border-radius: 30px;
      margin: 10px 0px;
    }
  }

  > div:last-child {
    display: flex;
    gap: 20px;
    height: 100%;
    > button {
      cursor: pointer;
      height: 50px;
      width: 50px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: red;
      color: white;
      font-size: 18px;
      z-index: 2;
    }
  }
`
