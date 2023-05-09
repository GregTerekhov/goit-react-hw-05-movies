import styled from '@emotion/styled';

export const CastItem = styled.div`
  display: flex;
  gap: 24px;

  & + & {
    margin-top: 16px;
  }
`;

export const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
