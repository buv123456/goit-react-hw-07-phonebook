import { CheckBoxStyled, CheckStyled, LabelStyled } from './ContactList.styled';

export const SortBox = ({ onCheck, sortBy }) => {
  return (
    <CheckBoxStyled>
      <span>sort by</span>
      <CheckStyled>
        <LabelStyled>
          name
          <input
            type="radio"
            value="name"
            checked={sortBy === 'name'}
            onChange={e => onCheck(e.target.value)}
          />
        </LabelStyled>
        <LabelStyled>
          phone
          <input
            type="radio"
            value="phone"
            checked={sortBy === 'phone'}
            onChange={e => onCheck(e.target.value)}
          />
        </LabelStyled>
      </CheckStyled>
    </CheckBoxStyled>
  );
};
