import styled from "styled-components";

export const MenuContainer = styled.div`
  position: absolute;

  ::before {
    position: absolute;
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid lightgray;
    content: "";
    transform:translateY(-0.4rem);
    z-index: -1;
  }
`;

export const MenuWrapper = styled.div`
  background-color: lightgray;
  border-radius: 10px;
  color: white;
`;

export const IconTextContainer = styled.div`
  padding: 0.2rem 0.5rem 0 0.5rem;

  display: flex;
  justify-content: center;

  :hover {
    background-color: lightblue;
    border-radius: 8px;
  }
`;

export const Icon = styled.div`
  width: 2.5rem;

  display: flex;
`;

export const Text = styled.div`
  width: 5rem;
  font-size: 1.2rem;
`;