import styled from 'styled-components'

export const View = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0e0e0;

  > div {
    display: flex;
    justify-content: space-between;
    width: 60%;
    > div:first-child {
      width: 50%;
      gap: 20px;
      > div:last-child {
        float: left;
        height: 500px;
        width: calc(100% + 30px);
        background: #f5f5f5;
        overflow-y: scroll;
        margin-bottom: 25px;
        ::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          background-color: #f5f5f5;
        }

        ::-webkit-scrollbar {
          width: 12px;
          background-color: #f5f5f5;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          background-color: #555;
        }
      }
    }
    > div:last-child {
      width: 40%;
    }
  }
`
