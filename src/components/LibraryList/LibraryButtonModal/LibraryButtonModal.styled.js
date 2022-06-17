import styled from '@emotion/styled';
import { HiPlus } from 'react-icons/hi';

export const ModalButton = styled.div`
  position: fixed;
  left: 50%;
  top: 90%;
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
  z-index: 1000;
`;

export const PlusIcon = styled(HiPlus)`
  color: #fff;
`;
