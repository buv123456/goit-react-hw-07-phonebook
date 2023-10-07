import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Phonebook from '../Phonebook/Phonebook';
import { Layout, WrapperStyled, Header } from './App.styled';
import { ContactForm } from '../ContactFofm/ContactForm';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <WrapperStyled>
        <Header>Phonebook</Header>
        <ContactForm />
      </WrapperStyled>
      {!!items.length && <Phonebook />}
    </Layout>
  );
}
