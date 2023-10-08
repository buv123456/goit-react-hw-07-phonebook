import styled from 'styled-components';

export const ListStyled = styled.ul`
  width: 100%;
  font-size: 18px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }
`;

export const ListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #0000008d;
  &:hover {
    color: black;
  }
`;

export const ItemInfoStyled = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  border-bottom: 1px dotted #000;
`;

export const ButtonStyled = styled.button`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  text-transform: uppercase;
  &:hover {
    color: #ff3737;
    scale: 1.2;
  }
`;

export const AllContactsStyled = styled.p`
  position: absolute;
  top: 15px;
  left: 15px;
  font-weight: 700;
  font-size: 10px;
`;

export const CheckBoxStyled = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  top: 15px;
  right: 15px;
  font-weight: 700;
  font-size: 12px;
`;

export const CheckStyled = styled.div`
  display: flex;
  gap: 8px;
`;

export const LabelStyled = styled.label`
  display: flex;
  gap: 4px;
  align-items: center;
`;
