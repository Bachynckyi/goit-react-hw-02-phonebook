import { ContactItem } from "./ContactItem/ContactItem";
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({data, onDeleteContact}) => {
    return (
      <ul className={css.contactList}>
        {data.map(dataItem => {
        return (
        <ContactItem
            key={dataItem.id}
            id={dataItem.id}
            name={dataItem.name}
            number={dataItem.number}
            onDeleteContact={onDeleteContact}   
        />
        )})}
      </ul>
    );
  };


ContactList.protoTypes = {
  dataItem: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}