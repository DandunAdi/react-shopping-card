import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  overflow: hidden;

  img {
    max-height: 250px;
    object-fit: cover;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    padding: 1rem;
  }
`;