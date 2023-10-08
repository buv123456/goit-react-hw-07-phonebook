import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Phonebook from '../Phonebook/Phonebook';
import { Layout, WrapperStyled, Header } from './App.styled';
import { ContactForm } from '../ContactFofm/ContactForm';
import { selectContacts, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <WrapperStyled>
        <Header>Phonebook</Header>
        <ContactForm />
      </WrapperStyled>
      {error && <p>{error}</p>}
      {!!contacts.length && <Phonebook />}
    </Layout>
  );
}
