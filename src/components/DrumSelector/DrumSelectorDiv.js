import styled from 'styled-components';

export default styled.div`
  float: right;
  width: 296px;
  margin: 23px 40px;
  background: ${(props) => (props.isOver ? '#a0a0a0' : null)};
`;
