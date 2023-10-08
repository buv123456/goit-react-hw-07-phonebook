import { Formik } from 'formik';
import Spinner from 'react-spinner-material';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selectors';
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
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    name = name.trim();
    phone = phone.trim();

    if (
      contacts.some(
        ({ name: savedName }) => savedName.toLowerCase() === name.toLowerCase()
      )
    ) {
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
        <ButtonStyled type="submit" disabled={isLoading}>
          {isLoading ? (
            <Spinner radius={25} color={'#333'} stroke={3} visible={true} />
          ) : (
            'Add contact'
          )}
        </ButtonStyled>
      </FormStyled>
    </Formik>
  );
}
