import styled from 'styled-components';

export default styled.button`
  background: ${props => props.isActive ? 'red' : 'white'};
`;
