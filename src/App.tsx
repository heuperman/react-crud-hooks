import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import {User} from './user';
import AddUserForm from './forms/AddUserForm';

const App: React.FC = (): JSX.Element => {
  const usersData: User[] = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' }
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user: User): void => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id: number): void => {
    setUsers(users.filter((user: User): boolean => user.id !== id));
  };

  return (
    <div className="container">
      <h1>React CRUD app with Hooks and TypeScript</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
};

export default App;
