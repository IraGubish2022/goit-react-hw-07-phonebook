import FormPhoneBook from './FormPhoneBook/FormPhoneBook';
import ContactList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

const App = () => {
  return (
    <div className="App">
      <Section title="PhoneBook">
        <FormPhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
