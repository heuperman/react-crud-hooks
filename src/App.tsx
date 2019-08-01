import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import {User} from './user';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App: React.FC = (): JSX.Element => {
  const usersData: User[] = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' }
  ];

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const initialFormState = {id: 0, name: '', username: ''};
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user: User): void => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id: number): void => {
    setUsers(users.filter((user: User): boolean => user.id !== id));
  };

  const editRow = (user: User): void => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id: number, updatedUser: User): void => {
    setEditing(false);
    setUsers(users.map(
      (user: User): User => (user.id === id ? updatedUser: user)
    ));
  };

  return (
    <div className="container">
      <h1>React CRUD app with Hooks and TypeScript</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
                setEditing={setEditing}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
