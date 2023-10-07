import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { SignupSchema } from 'helpers/submitCheck';
import {
  ButtonStyled,
  ErrorMsgStyled,
  FieldStyled,
  FormStyled,
  LabelStyled,
} from './ContactFofm.styled';
import { addContact } from 'redux/operations';

const initialValues = {
  name: '',
  number: '',
};

export function ContactFofm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    name = name.trim();
    number = number.trim();

    if (contacts.items.some(i => i.name.toLowerCase() === name.toLowerCase())) {
      alert(name + ' is already in contacts list!');
    } else {
      dispatch(addContact({ name, number }));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <FormStyled>
        <LabelStyled>
          Name
          <FieldStyled
            type="text"
            name="name"
            placeholder="Charles de Castelmore d'Artagnan"
          />
          <ErrorMsgStyled name="name" component="div" />
        </LabelStyled>
        <LabelStyled>
          Phone
          <FieldStyled type="tel" name="number" placeholder="Phone" />
          <ErrorMsgStyled name="number" component="div" />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
}
