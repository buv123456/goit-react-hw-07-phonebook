import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonStyled,
  ItemInfoStyled,
  ListItemStyled,
  ListStyled,
} from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ListStyled>
      {contacts.map(({ name, phone, id }) => (
        <ListItemStyled key={id} name={name}>
          <ItemInfoStyled>
            <span>{name}:</span>
            <span> {phone}</span>
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
