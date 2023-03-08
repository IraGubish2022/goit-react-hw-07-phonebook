//import PropTypes from 'prop-types';
import Style from './Contacts.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { getContact } from 'redux/selectors';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul className={Style.contactsList}>
//       {contacts.map(({ id, name, number }) => {
//         return (
//           <ContactItem
//             id={id}
//             key={id}
//             name={name}
//             number={number}
//             onDeleteContact={onDeleteContact}
//           />
//         );
//       })}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContact);
  console.log(filter);
  console.log(contacts);
  const filtredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      }
    }
    return contacts;
  };
  const contactsFiltred = filtredContacts();
  console.log(contactsFiltred);
  return (
    <ul className={Style.contactsList}>
      {contactsFiltred &&
        contactsFiltred.map(({ id, name, number }) => {
          return <ContactItem id={id} key={id} name={name} number={number} />;
        })}
    </ul>
  );
};

export default ContactList;
