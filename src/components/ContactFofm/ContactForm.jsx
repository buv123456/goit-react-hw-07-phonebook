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
} from './ContactForm.styled';
import { addContact } from 'redux/operations';

const initialValues = {
  name: '',
  phone: '',
};

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log('contacts', contacts);

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    console.log('handleSubmit');
    name = name.trim();
    phone = phone.trim();

    if (contacts.some(i => i.name.toLowerCase() === name.toLowerCase())) {
      alert(name + ' is already in contacts list!');
    } else {
      dispatch(addContact({ name, phone }));
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
          <FieldStyled type="tel" name="phone" placeholder="Phone" />
          <ErrorMsgStyled name="phone" component="div" />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
}
