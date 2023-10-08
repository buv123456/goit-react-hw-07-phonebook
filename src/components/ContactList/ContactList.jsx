import { useSelector } from 'react-redux';
import {
  AllContactsStyled,
  ListItemStyled,
  ListStyled,
} from './ContactList.styled';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';
import ContactItem from './ContactItem';
import sorting from 'helpers/sorting';
import { useState } from 'react';
import { SortBox } from './SortBox';

export function ContactList() {
  const contactsAll = useSelector(selectContacts);
  const contacts = useSelector(selectFilteredContacts);
  const [sortBy, setSortBy] = useState('name');

  const handleCheck = value => {
    setSortBy(value);
  };

  return (
    <>
      <AllContactsStyled>
        {contactsAll.length} all contacts <br />
        {contacts.length} filtered contacts
      </AllContactsStyled>
      <SortBox onCheck={handleCheck} sortBy={sortBy} />
      <ListStyled>
        {sorting(contacts, sortBy).map(({ name, phone, id }) => (
          <ListItemStyled key={id}>
            <ContactItem name={name} phone={phone} id={id} />
          </ListItemStyled>
        ))}
      </ListStyled>
    </>
  );
}
