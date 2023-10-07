import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonStyled,
  ItemInfoStyled,
  ListItemStyled,
  ListStyled,
} from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export function ContactList() {
  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = items.filter(({ name, number }) =>
    (name + number).toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListStyled>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItemStyled key={id} name={name}>
          <ItemInfoStyled>
            <span>{name}:</span>
            <span> {number}</span>
          </ItemInfoStyled>
          <ButtonStyled
            type="button"
            name={id}
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </ButtonStyled>
        </ListItemStyled>
      ))}
    </ListStyled>
  );
}
