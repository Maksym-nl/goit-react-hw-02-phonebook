export function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {' '}
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => onDelete(contact.id)}>Удалить</button>
        </li>
      ))}{' '}
    </ul>
  );
}
