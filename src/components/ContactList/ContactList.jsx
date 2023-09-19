export function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {' '}
      {contacts.map(contact => (
        <li key={contact.id} onDelete={onDelete}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => onDelete(contactId)}>Удалить</button>
        </li>
      ))}{' '}
    </ul>
  );
}
