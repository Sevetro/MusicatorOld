import styled from 'styled-components';

export default styled.div`
  width: 89px;
  height: 20px;
  display: inline-block;
  margin-bottom: -5px;
  margin-left: 2px;
  border-radius: 10px;
  background: ${(props) => props.metronomeLedColor};
`;
