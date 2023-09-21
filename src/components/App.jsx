import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ' ',
  };

  // const initialValue = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   name: '',
  //   number: '',
  //   filter: '',
  // };

  // export class App extends Component {
  //   state = { ...initialValue };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const isExist = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isExist) {
      alert(`${name} is Exist`);
      return;
    }
    const newContact = { name, number, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deletContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== contactId;
      }),
    }));
  };

  chanchFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  contactsFilter = this.state.contacts.filter(contact =>
    contact.text.toLowerCase().includes(this.state.filter.toLowerCase())
  );

  render() {
    const { filter } = this.state;
    console.log(this.state);
    return (
      <div>
        <Form addContact={this.addContact} />
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.deletContact}
        />

        <Filter value={filter} onChange={this.chanchFilter} />
      </div>
    );
  }
}
