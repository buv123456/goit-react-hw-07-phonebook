import { PhonebookStyled } from './Phonebook.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

function Phonebook() {
  return (
    <PhonebookStyled>
      <Filter />
      <ContactList />
    </PhonebookStyled>
  );
}

export default Phonebook;
