import styled from 'styled-components';

export default styled.span`
  float: left;
  cursor: ${(props) => (props.isAssigned ? 'move' : null)};
  font-size: 40px;
  width: 70px;
  height: 63px;
  padding-top: 7px;
  border-radius: 20px;
  margin: 2px;
  color: black;
  background: ${(props) =>
    props.isActive ? 'red' : props.isAssigned ? 'yellow' : 'white'};
  opacity: ${(props) => (props.isOver ? '0.5' : '1')};
`;
