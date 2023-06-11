import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [searchKey, setSearchKey] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more user objects here
  ]);

  const handleSearchChange = (event) => {
    setSearchKey(event.target.value);
  };

  // Filter the user list based on the search key
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div>
      <h1>Search Filter App</h1>
      <SearchInput value={searchKey} onChange={handleSearchChange} />
      <UserList users={filteredUsers} />
    </div>
  );
};

const SearchInput = ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={onChange} placeholder="Enter search key" />
  );
};

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
