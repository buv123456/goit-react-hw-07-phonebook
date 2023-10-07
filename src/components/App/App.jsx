import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Phonebook from '../Phonebook/Phonebook';
import { Layout, WrapperStyled, Header } from './App.styled';
import { ContactFofm } from '../ContactFofm/ContactFofm';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  console.log('itemsApp', items);

  useEffect(() => {
    console.log('before');
    dispatch(fetchContacts());
    console.log('after');
  }, [dispatch]);

  return (
    <Layout>
      <WrapperStyled>
        <Header>Phonebook</Header>
        <ContactFofm />
      </WrapperStyled>
      {!!items.length && <Phonebook />}
    </Layout>
  );
}
