import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  gap: 40px;
`;

const ListItem = styled.li`
  font-size: 18px;
`;

export { List, ListItem };
