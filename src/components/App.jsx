import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: ' ',
  };

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
        <ContactList contacts={this.state.contacts} />
        <Filter value={filter} onChange={this.chanchFilter} />
      </div>
    );
  }
}
