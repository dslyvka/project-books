import styled from '@emotion/styled';
import { HiPlus } from 'react-icons/hi';

export const ModalButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: -26px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #ff6b08;
  cursor: pointer;
`;

export const PlusIcon = styled(HiPlus)`
  color: #fff;
`;
