import styled from "styled-components";
import {FlexColumn} from "../CommonStyled";

export const CardsContainer = styled(FlexColumn)`
  min-width: 120px;
  padding: 8px;
  margin: 8px;
  box-shadow: 0px 5px 10px #cbd5e0;
`;

export const CardTitle = styled.h4`
  font-weight: bold;
  text-align: center;
`;