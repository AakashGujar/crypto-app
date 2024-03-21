import styled from "styled-components";



export const LoaderWrap = styled.span`
  margin: 10rem auto;
  width: 64px;
  height: 64px;
  position: relative;
  background-image: linear-gradient(#fff 16px, transparent 0),
    linear-gradient(#ff00ea 16px, transparent 0),
    linear-gradient(#ff00ea 16px, transparent 0),
    linear-gradient(#fff 16px, transparent 0);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: left top, left bottom, right top, right bottom;
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    0% {
      width: 64px;
      height: 64px;
      transform: rotate(0deg);
    }
    50% {
      width: 30px;
      height: 30px;
      transform: rotate(180deg);
    }
    100% {
      width: 64px;
      height: 64px;
      transform: rotate(360deg);
    }
  }
`;
