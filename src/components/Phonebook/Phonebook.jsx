import { PhonebookStyled } from './Phonebook.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';

function Phonebook() {
  const error = useSelector(selectError);
  return error ? (
    <p>{error}</p>
  ) : (
    <PhonebookStyled>
      <Filter />
      <ContactList />
    </PhonebookStyled>
  );
}

export default Phonebook;
