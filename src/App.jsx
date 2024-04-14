import "./App.css";

import { useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";

import ContactList from "./components/ContactList/ContactList.jsx";

import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { addContact, deleteContact } from "./redux/contactsSlice.js";
import { selectContacts } from "./redux/filtersSlice.js";

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => {
    return state.contact.contacts.items;
  });

  const filter = useSelector((state) => {
    return state.filter.filters.name;
  });

  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    const action = addContact(finalContact);

    dispatch(action);
  };

  const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const onChangeFilter = (event) => {
    const action = selectContacts(event.target.value);
    dispatch(action);
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      }),
    [filter, contacts]
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={onAddContact} />
      <SearchBox value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={onDeleteContact}
      />
    </>
  );
}

export default App;
