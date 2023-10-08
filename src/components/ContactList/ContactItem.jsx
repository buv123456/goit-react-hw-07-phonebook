import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CgTrashEmpty } from 'react-icons/cg';
import Spinner from 'react-spinner-material';
import { ButtonStyled, ItemInfoStyled } from './ContactList.styled';
import { deleteContact } from 'redux/operations';

function ContactItem({ name, phone, id }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsLoading(true);
  };
  return (
    <>
      <ItemInfoStyled>
        <span>{name}:</span>
        <span> {phone}</span>
      </ItemInfoStyled>
      <ButtonStyled
        type="button"
        name={id}
        disabled={isLoading}
        onClick={handleDelete}
      >
        {isLoading ? (
          <Spinner radius={18} color={'#777'} stroke={4} visible={true} />
        ) : (
          <CgTrashEmpty size="22px" />
        )}
      </ButtonStyled>
    </>
  );
}
export default ContactItem;
