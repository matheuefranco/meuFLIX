import styled from 'styled-components';

export const VideoFrameModal = styled.iframe`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  height: 80%;
  width: 80%;
  border-radius: 10px;
  align-items: flex-end;
  padding: 16px;
  @media (max-width: 800px) {
    height: 50%;
  }
`;