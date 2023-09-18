export function ContactList({ contacts }) {
  return (
    <ul>
      {' '}
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button type="button">Удалить</button>
        </li>
      ))}{' '}
    </ul>
  );
}
