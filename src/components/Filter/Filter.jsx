import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled } from './Filter.styled';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterStyled
      type="text"
      name="filter"
      onChange={e => dispatch(changeFilter(e.target.value))}
      value={filter}
      placeholder="add filter..."
    />
  );
}
