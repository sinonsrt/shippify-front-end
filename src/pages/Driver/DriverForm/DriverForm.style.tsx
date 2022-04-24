import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormTitle = styled.p`
  color: black;
  font-size: xx-large;
  font-weight: bold;
  margin: 20px;
  text-decoration: none;
  text-align: center;
`;

export const FormButtons = styled.div`
  display: flex;
  justify-content: end;
`;

export const TopButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const ButtonLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
