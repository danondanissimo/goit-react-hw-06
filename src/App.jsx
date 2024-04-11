import "./App.css";

import { useEffect, useState } from "react";

import ContactList from "./components/ContactList/ContactList.jsx";

import initialContacts from "./components/ContactList/contacts.json";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return initialContacts;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevState) => {
      return [...prevState, finalContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== contactId);
    });
  };

  const [filter, setFilter] = useState("");

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={onChangeFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
