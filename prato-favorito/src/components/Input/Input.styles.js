import styled from "styled-components"

export const Root = styled.div`
display: flex;
align-items: center;
width: calc(100% + 30px);

input{
  height: 40px;
  width: calc(100% + 30px);
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0px 10px;
  font-size: 15px;
  transition: all 0.3s ease;
  &:focus {
    border-color: #333;
    box-shadow: 0 0 10px #333;
  }
}
`
