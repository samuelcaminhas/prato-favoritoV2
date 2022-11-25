import styled from 'styled-components'

export const View = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0e0e0;

  > div {
    width: 500px;
    padding-bottom: 20px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;

    > input {
      width: 80%;
      height: 40px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 0 10px;
    }
    > button {
      width: 80%;
      height: 40px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 0 10px;
      background-color: #fff;
      color: #000;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background-color: #ccc;
      }
    }
  }
`
