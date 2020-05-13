import styled from 'styled-components';

export default styled.button`
  float: left;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin: 2px;
  background: ${(props) => (props.isActive ? 'red' : 'white')};
`;
